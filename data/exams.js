export const exams = [
  {
    id: 'exam_math_basic',
    title: 'Matematika asoslari',
    subjectId: 'math',
    description: 'Algebra va geometriya asosiy testlari',
    questionsCount: 10,
    duration: 15,
    difficulty: 'easy',
    type: 'practice',
    popular: true,
    isNew: false
  },
  {
    id: 'exam_math_advanced',
    title: 'Matematika chuqurlashtirilgan',
    subjectId: 'math',
    description: 'Murakkab tenglamalar va funksiyalar',
    questionsCount: 15,
    duration: 25,
    difficulty: 'hard',
    type: 'exam',
    popular: false,
    isNew: true
  },
  {
    id: 'exam_english_grammar',
    title: 'Ingliz tili grammatikasi',
    subjectId: 'english',
    description: 'Tenses, articles, prepositions',
    questionsCount: 15,
    duration: 20,
    difficulty: 'medium',
    type: 'practice',
    popular: true,
    isNew: false
  },
  {
    id: 'exam_ielts_reading',
    title: 'IELTS Reading Practice',
    subjectId: 'ielts',
    description: 'IELTS Academic Reading style questions',
    questionsCount: 10,
    duration: 20,
    difficulty: 'hard',
    type: 'exam',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_history_uz',
    title: 'O\'zbekiston tarixi',
    subjectId: 'history',
    description: 'Mustaqillik va Temuriylar davri',
    questionsCount: 10,
    duration: 15,
    difficulty: 'medium',
    type: 'practice',
    popular: false,
    isNew: false
  },
  {
    id: 'exam_biology_basic',
    title: 'Biologiya asoslari',
    subjectId: 'biology',
    description: 'Anatomiya va botanika',
    questionsCount: 10,
    duration: 15,
    difficulty: 'easy',
    type: 'practice',
    popular: true,
    isNew: false
  },
  {
    id: 'exam_informatics_web',
    title: 'Web dasturlash asoslari',
    subjectId: 'informatics',
    description: 'HTML, CSS, JavaScript asoslari',
    questionsCount: 12,
    duration: 20,
    difficulty: 'medium',
    type: 'practice',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_driving',
    title: 'Haydovchilik imtihoni',
    subjectId: 'driving',
    description: 'Yo\'l belgilari va qoidalar',
    questionsCount: 15,
    duration: 20,
    difficulty: 'easy',
    type: 'exam',
    popular: true,
    isNew: false
  },
  {
    id: 'exam_chemistry',
    title: 'Kimyo testlari',
    subjectId: 'chemistry',
    description: 'Anorganik va organik kimyo',
    questionsCount: 10,
    duration: 15,
    difficulty: 'hard',
    type: 'practice',
    popular: false,
    isNew: false
  },
  {
    id: 'exam_physics',
    title: 'Fizika asoslari',
    subjectId: 'physics',
    description: 'Mexanika va elektr',
    questionsCount: 10,
    duration: 15,
    difficulty: 'medium',
    type: 'practice',
    popular: false,
    isNew: true
  },
  {
    id: 'exam_cefr_b1',
    title: 'CEFR B1 Level',
    subjectId: 'cefr',
    description: 'B1 darajasi uchun test',
    questionsCount: 15,
    duration: 25,
    difficulty: 'medium',
    type: 'exam',
    popular: true,
    isNew: false
  },
  {
    id: 'exam_daily',
    title: 'Kunlik Challenge',
    subjectId: null,
    description: 'Har kuni yangilanadigan 10 ta savol',
    questionsCount: 10,
    duration: 15,
    difficulty: 'mixed',
    type: 'challenge',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_programming_basic',
    title: 'Dasturlash asoslari',
    subjectId: 'informatics',
    description: 'Python, JS va algoritmlar asosiy testlari',
    questionsCount: 15,
    duration: 25,
    difficulty: 'medium',
    type: 'practice',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_programming_oop',
    title: 'OOP va algoritmlar',
    subjectId: 'informatics',
    description: 'Obyektga yo\'naltirilgan dasturlash va algoritmlar',
    questionsCount: 12,
    duration: 20,
    difficulty: 'hard',
    type: 'exam',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_html',
    title: 'HTML asoslari',
    subjectId: 'informatics',
    description: 'HTML teglari va sahifa strukturasi',
    questionsCount: 12,
    duration: 15,
    difficulty: 'easy',
    type: 'practice',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_css',
    title: 'CSS va responsive',
    subjectId: 'informatics',
    description: 'Flexbox, Grid, media query',
    questionsCount: 12,
    duration: 18,
    difficulty: 'medium',
    type: 'practice',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_javascript',
    title: 'JavaScript asoslari',
    subjectId: 'informatics',
    description: 'O\'zgaruvchilar, funksiyalar, DOM, ES6',
    questionsCount: 15,
    duration: 25,
    difficulty: 'medium',
    type: 'exam',
    popular: true,
    isNew: true
  },
  {
    id: 'exam_python',
    title: 'Python dasturlash',
    subjectId: 'informatics',
    description: 'Python sintaksisi, list, dict, funksiyalar',
    questionsCount: 15,
    duration: 25,
    difficulty: 'medium',
    type: 'practice',
    popular: true,
    isNew: true
  }
];

export function getExamById(id) {
  return exams.find(e => e.id === id);
}

export function getExamsBySubject(subjectId) {
  return exams.filter(e => e.subjectId === subjectId);
}

export function getPopularExams() {
  return exams.filter(e => e.popular);
}

export function getNewExams() {
  return exams.filter(e => e.isNew);
}
