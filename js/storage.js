// LocalStorage wrapper for ExamUZ demo mode

const PREFIX = 'examuz_';

export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage set error:', e);
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(PREFIX + key);
  },

  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX))
      .forEach(k => localStorage.removeItem(k));
  }
};

// User related
export function getCurrentUser() {
  return storage.get('currentUser');
}

export function setCurrentUser(user) {
  storage.set('currentUser', user);
}

export function logoutUser() {
  storage.remove('currentUser');
  storage.remove('activeTest');
}

// Test session
export function saveActiveTest(testState) {
  storage.set('activeTest', testState);
}

export function getActiveTest() {
  return storage.get('activeTest');
}

export function clearActiveTest() {
  storage.remove('activeTest');
}

// Results
export function saveTestResult(result) {
  const results = storage.get('testResults', []);
  results.unshift(result);
  // Keep last 100
  if (results.length > 100) results.length = 100;
  storage.set('testResults', results);
  return result;
}

export function getTestResults() {
  return storage.get('testResults', []);
}

// Mistakes
export function saveMistake(mistake) {
  const mistakes = storage.get('mistakes', []);
  // Avoid duplicates by question id
  if (!mistakes.find(m => m.questionId === mistake.questionId)) {
    mistakes.push(mistake);
    storage.set('mistakes', mistakes);
  }
}

export function getMistakes() {
  return storage.get('mistakes', []);
}

export function removeMistake(questionId) {
  let mistakes = storage.get('mistakes', []);
  mistakes = mistakes.filter(m => m.questionId !== questionId);
  storage.set('mistakes', mistakes);
}

export function clearMistakes() {
  storage.set('mistakes', []);
}

// Leaderboard (demo)
export function getLeaderboard() {
  return storage.get('leaderboard', getDefaultLeaderboard());
}

export function updateLeaderboard(user, score) {
  let board = getLeaderboard();
  const existing = board.find(u => u.id === user.id);
  if (existing) {
    existing.score += score;
    existing.testsCompleted = (existing.testsCompleted || 0) + 1;
  } else {
    board.push({
      id: user.id,
      name: user.name,
      avatar: user.avatar || null,
      score: score,
      testsCompleted: 1
    });
  }
  board.sort((a, b) => b.score - a.score);
  storage.set('leaderboard', board);
  return board;
}

function getDefaultLeaderboard() {
  return [
    { id: 'demo1', name: 'Azizbek K.', score: 2450, testsCompleted: 42, avatar: null },
    { id: 'demo2', name: 'Dilnoza R.', score: 2180, testsCompleted: 38, avatar: null },
    { id: 'demo3', name: 'Javohir M.', score: 1950, testsCompleted: 35, avatar: null },
    { id: 'demo4', name: 'Madina S.', score: 1820, testsCompleted: 31, avatar: null },
    { id: 'demo5', name: 'Sardor T.', score: 1650, testsCompleted: 28, avatar: null },
    { id: 'demo6', name: 'Nilufar A.', score: 1480, testsCompleted: 25, avatar: null },
    { id: 'demo7', name: 'Bobur N.', score: 1320, testsCompleted: 22, avatar: null },
    { id: 'demo8', name: 'Gulnora Y.', score: 1190, testsCompleted: 19, avatar: null },
    { id: 'demo9', name: 'Timur X.', score: 980, testsCompleted: 15, avatar: null },
    { id: 'demo10', name: 'Sevara Q.', score: 850, testsCompleted: 12, avatar: null }
  ];
}

// Achievements
export function getUserAchievements() {
  return storage.get('userAchievements', []);
}

export function unlockAchievement(achievementId) {
  const unlocked = getUserAchievements();
  if (!unlocked.includes(achievementId)) {
    unlocked.push(achievementId);
    storage.set('userAchievements', unlocked);
    return true;
  }
  return false;
}

// Daily challenge
export function getDailyChallengeState() {
  return storage.get('dailyChallenge', { lastDate: null, completed: false, score: 0 });
}

export function setDailyChallengeState(state) {
  storage.set('dailyChallenge', state);
}

// Study planner
export function getStudyPlans() {
  return storage.get('studyPlans', []);
}

export function saveStudyPlans(plans) {
  storage.set('studyPlans', plans);
}

// Theme
export function getTheme() {
  return storage.get('theme', 'dark');
}

export function setTheme(theme) {
  storage.set('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// Stats
export function getUserStats() {
  return storage.get('userStats', {
    testsCompleted: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    totalXP: 0,
    streak: 0,
    lastActiveDate: null,
    subjectStats: {}
  });
}

export function updateUserStats(updates) {
  const stats = { ...getUserStats(), ...updates };
  storage.set('userStats', stats);
  return stats;
}