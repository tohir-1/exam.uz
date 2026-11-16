// Core Test Engine for ExamUZ
import { questions as staticQuestions, getQuestionById as getStaticById } from '../data/questions.js';
import { getExamById } from '../data/exams.js';
import { saveActiveTest, getActiveTest, clearActiveTest, saveTestResult, saveMistake, updateLeaderboard, getCurrentUser, getUserStats, updateUserStats, unlockAchievement, getDailyChallengeState, setDailyChallengeState, storage } from './storage.js';
import { toast } from './notifications.js';
import { formatTime, calculatePercentage, generateId, shuffleArray, getTodayKey } from './utils.js';

function getAllQuestionsPool() {
  const custom = storage.get('customQuestions', []);
  return [...staticQuestions, ...custom];
}

function getQuestionsBySubject(subjectId, limit = null, shuffle = true) {
  let filtered = getAllQuestionsPool().filter(q => q.subjectId === subjectId);
  if (shuffle) filtered = [...filtered].sort(() => Math.random() - 0.5);
  if (limit) filtered = filtered.slice(0, limit);
  return filtered;
}

function getRandomQuestions(count = 10, subjectId = null) {
  let pool = subjectId
    ? getAllQuestionsPool().filter(q => q.subjectId === subjectId)
    : [...getAllQuestionsPool()];
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function getQuestionById(id) {
  return getAllQuestionsPool().find(q => q.id === id) || getStaticById(id);
}

export class TestEngine {
  constructor(options = {}) {
    this.mode = options.mode || 'practice'; // practice | exam | review | challenge
    this.subjectId = options.subjectId || null;
    this.examId = options.examId || null;
    this.questionIds = options.questionIds || null; // for mistakes review
    this.duration = options.duration || 0; // minutes, 0 = no timer
    this.questionsCount = options.questionsCount || 10;

    this.questions = [];
    this.answers = {}; // questionId -> selectedIndex
    this.flagged = new Set();
    this.currentIndex = 0;
    this.startTime = null;
    this.endTime = null;
    this.timeLeft = 0;
    this.timerInterval = null;
    this.isFinished = false;
    this.onUpdate = options.onUpdate || (() => {});
    this.onFinish = options.onFinish || (() => {});
  }

  init() {
    // Restore if active test exists for same config
    const active = getActiveTest();
    if (active && active.examId === this.examId && active.mode === this.mode && !active.isFinished) {
      this.restore(active);
      return true;
    }

    // Resolve subject from exam if not provided
    if (!this.subjectId && this.examId) {
      const exam = getExamById(this.examId);
      if (exam?.subjectId) this.subjectId = exam.subjectId;
    }

    // Load questions (count = user tanlagan soni)
    if (this.questionIds && this.questionIds.length) {
      this.questions = this.questionIds.map(id => getQuestionById(id)).filter(Boolean);
    } else if (this.subjectId) {
      this.questions = getQuestionsBySubject(this.subjectId, this.questionsCount, true);
    } else if (this.examId === 'exam_daily' || this.mode === 'challenge') {
      this.questions = getRandomQuestions(this.questionsCount || 10);
    } else {
      this.questions = getRandomQuestions(this.questionsCount, this.subjectId);
    }

    if (this.questions.length === 0) {
      toast.error('Savollar topilmadi');
      return false;
    }

    // Shuffle options for each question? Optional - keep original for consistency
    this.answers = {};
    this.flagged = new Set();
    this.currentIndex = 0;
    this.startTime = Date.now();
    this.isFinished = false;

    if (this.duration > 0) {
      this.timeLeft = this.duration * 60;
      this.startTimer();
    }

    this.persist();
    this.onUpdate();
    toast.info('Test boshlandi!');
    return true;
  }

  restore(state) {
    this.questions = state.questions;
    this.answers = state.answers || {};
    this.flagged = new Set(state.flagged || []);
    this.currentIndex = state.currentIndex || 0;
    this.startTime = state.startTime;
    this.timeLeft = state.timeLeft || 0;
    this.mode = state.mode;
    this.examId = state.examId;
    this.subjectId = state.subjectId;
    this.isFinished = false;
    if (this.timeLeft > 0) this.startTimer();
    this.onUpdate();
    toast.info('Test holati tiklandi');
  }

  persist() {
    saveActiveTest({
      questions: this.questions,
      answers: this.answers,
      flagged: [...this.flagged],
      currentIndex: this.currentIndex,
      startTime: this.startTime,
      timeLeft: this.timeLeft,
      mode: this.mode,
      examId: this.examId,
      subjectId: this.subjectId,
      isFinished: this.isFinished
    });
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.persist();
      this.onUpdate();
      if (this.timeLeft <= 0) {
        this.finish(true);
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectAnswer(optionIndex) {
    if (this.isFinished) return;
    const q = this.getCurrentQuestion();
    if (!q) return;
    this.answers[q.id] = optionIndex;
    this.persist();
    this.onUpdate();

    // Practice mode: show feedback immediately
    if (this.mode === 'practice') {
      // Feedback handled in UI
    }
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.persist();
      this.onUpdate();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.persist();
      this.onUpdate();
    }
  }

  goTo(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.persist();
      this.onUpdate();
    }
  }

  toggleFlag() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    if (this.flagged.has(q.id)) this.flagged.delete(q.id);
    else this.flagged.add(q.id);
    this.persist();
    this.onUpdate();
  }

  getProgress() {
    const answered = Object.keys(this.answers).length;
    return {
      current: this.currentIndex + 1,
      total: this.questions.length,
      answered,
      percentage: Math.round((answered / this.questions.length) * 100),
      flagged: this.flagged.size
    };
  }

  calculateResults() {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    const details = [];

    this.questions.forEach(q => {
      const selected = this.answers[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (selected === undefined) {
        unanswered++;
      } else if (isCorrect) {
        correct++;
      } else {
        wrong++;
        // Save mistake
        saveMistake({
          questionId: q.id,
          subjectId: q.subjectId,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          selectedAnswer: selected,
          explanation: q.explanation,
          date: new Date().toISOString()
        });
      }
      details.push({
        questionId: q.id,
        selected,
        correct: q.correctAnswer,
        isCorrect: selected === q.correctAnswer,
        explanation: q.explanation
      });
    });

    const total = this.questions.length;
    const percentage = calculatePercentage(correct, total);
    const timeSpent = this.endTime ? Math.round((this.endTime - this.startTime) / 1000) : 0;

    return {
      correct,
      wrong,
      unanswered,
      total,
      percentage,
      timeSpent,
      details,
      score: correct * 10 // simple scoring
    };
  }

  finish(auto = false) {
    if (this.isFinished) return;
    this.isFinished = true;
    this.stopTimer();
    this.endTime = Date.now();
    clearActiveTest();

    const results = this.calculateResults();
    const user = getCurrentUser();

    const resultRecord = {
      id: generateId('result'),
      userId: user?.id || 'guest',
      examId: this.examId,
      subjectId: this.subjectId,
      mode: this.mode,
      ...results,
      date: new Date().toISOString(),
      questions: this.questions.map(q => q.id)
    };

    saveTestResult(resultRecord);

    // Update stats
    if (user) {
      const stats = getUserStats();
      const newStats = {
        testsCompleted: (stats.testsCompleted || 0) + 1,
        totalCorrect: (stats.totalCorrect || 0) + results.correct,
        totalQuestions: (stats.totalQuestions || 0) + results.total,
        totalXP: (stats.totalXP || 0) + results.score + (results.percentage === 100 ? 50 : 0)
      };
      // Subject stats
      if (this.subjectId) {
        const sub = { ...(stats.subjectStats || {}) };
        sub[this.subjectId] = (sub[this.subjectId] || 0) + 1;
        newStats.subjectStats = sub;
      }
      updateUserStats(newStats);

      // Leaderboard
      updateLeaderboard(user, results.score);

      // Achievements
      this.checkAchievements(newStats, results);

      // Daily challenge
      if (this.mode === 'challenge' || this.examId === 'exam_daily') {
        const today = getTodayKey();
        const daily = getDailyChallengeState();
        if (daily.lastDate !== today) {
          setDailyChallengeState({ lastDate: today, completed: true, score: results.score });
        }
      }
    }

    if (auto) toast.warning('Vaqt tugadi! Test avtomatik yakunlandi.');
    else toast.success('Test yakunlandi!');

    this.onFinish(resultRecord);
    return resultRecord;
  }

  checkAchievements(stats, results) {
    if (stats.testsCompleted >= 1) unlockAchievement('first_test');
    if (results.percentage === 100) unlockAchievement('perfect_score');
    if (stats.testsCompleted >= 10) unlockAchievement('tests_10');
    if (stats.testsCompleted >= 50) unlockAchievement('tests_50');
    if ((stats.streak || 0) >= 7) unlockAchievement('streak_7');
    // Subject masters simplified
    const sub = stats.subjectStats || {};
    if ((sub.math || 0) >= 5) unlockAchievement('math_master');
    if ((sub.english || 0) >= 5) unlockAchievement('english_master');
  }

  // For practice mode feedback
  isAnswerCorrect(questionId) {
    const q = this.questions.find(qq => qq.id === questionId);
    if (!q) return null;
    return this.answers[questionId] === q.correctAnswer;
  }

  getAnsweredStatus() {
    return this.questions.map((q, i) => ({
      index: i,
      answered: this.answers[q.id] !== undefined,
      flagged: this.flagged.has(q.id),
      current: i === this.currentIndex
    }));
  }
}

// Helper to start a test from URL params or options
export function startTestFromParams() {
  const params = new URLSearchParams(window.location.search);
  const examId = params.get('exam');
  const subjectId = params.get('subject');
  const mode = params.get('mode') || 'practice';
  const count = parseInt(params.get('count') || '10', 10);

  let duration = 0;
  if (mode === 'exam') {
    const exam = examId ? getExamById(examId) : null;
    duration = exam?.duration || 20;
  }

  return new TestEngine({
    mode,
    examId,
    subjectId,
    questionsCount: count,
    duration
  });
}