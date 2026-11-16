export const subjects = [
  {
    id: 'math',
    name: 'Matematika',
    nameEn: 'Mathematics',
    description: 'Algebra, geometriya, trigonometriya va boshqa matematik mavzular',
    icon: 'calculator',
    color: '#7657FF',
    questionsCount: 45,
    difficulty: 'medium',
    topics: ['Algebra', 'Geometriya', 'Trigonometriya', 'Funksiyalar', 'Tenglamalar']
  },
  {
    id: 'english',
    name: 'Ingliz tili',
    nameEn: 'English',
    description: 'Grammatika, lug\'at, reading va listening mashqlari',
    icon: 'languages',
    color: '#28C7FA',
    questionsCount: 60,
    difficulty: 'medium',
    topics: ['Grammar', 'Vocabulary', 'Reading', 'Tenses', 'Prepositions']
  },
  {
    id: 'uzbek',
    name: 'Ona tili',
    nameEn: 'Uzbek Language',
    description: 'O\'zbek tili grammatikasi, imlo va adabiyot',
    icon: 'book-open',
    color: '#21C98B',
    questionsCount: 40,
    difficulty: 'easy',
    topics: ['Grammatika', 'Imlo', 'Adabiyot', 'Soz yasalishi']
  },
  {
    id: 'history',
    name: 'Tarix',
    nameEn: 'History',
    description: 'O\'zbekiston va jahon tarixi',
    icon: 'landmark',
    color: '#F45B72',
    questionsCount: 35,
    difficulty: 'medium',
    topics: ['O\'zbekiston tarixi', 'Jahon tarixi', 'Madaniyat']
  },
  {
    id: 'biology',
    name: 'Biologiya',
    nameEn: 'Biology',
    description: 'Odam anatomiyasi, botanika, zoologiya',
    icon: 'leaf',
    color: '#21C98B',
    questionsCount: 30,
    difficulty: 'medium',
    topics: ['Anatomiya', 'Botanika', 'Zoologiya', 'Genetika']
  },
  {
    id: 'chemistry',
    name: 'Kimyo',
    nameEn: 'Chemistry',
    description: 'Organik va anorganik kimyo',
    icon: 'flask-conical',
    color: '#28C7FA',
    questionsCount: 25,
    difficulty: 'hard',
    topics: ['Anorganik', 'Organik', 'Reaksiyalar']
  },
  {
    id: 'physics',
    name: 'Fizika',
    nameEn: 'Physics',
    description: 'Mexanika, elektr, optika',
    icon: 'atom',
    color: '#7657FF',
    questionsCount: 30,
    difficulty: 'hard',
    topics: ['Mexanika', 'Elektr', 'Optika', 'Termodinamika']
  },
  {
    id: 'informatics',
    name: 'Informatika',
    nameEn: 'Computer Science',
    description: 'Dasturlash asoslari, algoritmlar, HTML/CSS/JS',
    icon: 'code',
    color: '#F45B72',
    questionsCount: 40,
    difficulty: 'medium',
    topics: ['HTML', 'CSS', 'JavaScript', 'Algoritmlar', 'Ma\'lumotlar strukturalari']
  },
  {
    id: 'ielts',
    name: 'IELTS',
    nameEn: 'IELTS',
    description: 'IELTS imtihoniga tayyorgarlik testlari',
    icon: 'globe',
    color: '#7657FF',
    questionsCount: 50,
    difficulty: 'hard',
    topics: ['Reading', 'Listening', 'Writing', 'Speaking', 'Vocabulary']
  },
  {
    id: 'cefr',
    name: 'CEFR',
    nameEn: 'CEFR',
    description: 'CEFR darajalari bo\'yicha ingliz tili testlari',
    icon: 'award',
    color: '#28C7FA',
    questionsCount: 40,
    difficulty: 'medium',
    topics: ['A1-A2', 'B1-B2', 'C1-C2']
  },
  {
    id: 'driving',
    name: 'Haydovchilik',
    nameEn: 'Driving License',
    description: 'Haydovchilik guvohnomasi imtihoni testlari',
    icon: 'car',
    color: '#21C98B',
    questionsCount: 50,
    difficulty: 'easy',
    topics: ['Yo\'l belgilari', 'Qoidalar', 'Xavfsizlik']
  },
  {
    id: 'grammar',
    name: 'Ingliz tili grammatikasi',
    nameEn: 'English Grammar',
    description: 'Ingliz tili grammatikasi bo\'yicha chuqur testlar',
    icon: 'book',
    color: '#F45B72',
    questionsCount: 55,
    difficulty: 'medium',
    topics: ['Tenses', 'Articles', 'Conditionals', 'Passive Voice']
  },
  {
    id: 'programming',
    name: 'Dasturlash',
    nameEn: 'Programming',
    description: 'Python, JavaScript, algoritmlar, OOP va dasturlash asoslari',
    icon: 'code-2',
    color: '#7657FF',
    questionsCount: 80,
    difficulty: 'medium',
    topics: ['Python', 'JavaScript', 'Algoritmlar', 'OOP', 'Ma\'lumotlar strukturalari', 'Git']
  },
  {
    id: 'html',
    name: 'HTML',
    nameEn: 'HTML',
    description: 'HTML teglari, struktura va semantic markup',
    icon: 'file-code',
    color: '#E34F26',
    questionsCount: 30,
    difficulty: 'easy',
    topics: ['Teglar', 'Formlar', 'Semantic', 'SEO']
  },
  {
    id: 'css',
    name: 'CSS',
    nameEn: 'CSS',
    description: 'Stillash, Flexbox, Grid, responsive dizayn',
    icon: 'palette',
    color: '#1572B6',
    questionsCount: 30,
    difficulty: 'medium',
    topics: ['Selektorlar', 'Flexbox', 'Grid', 'Animatsiya']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    nameEn: 'JavaScript',
    description: 'JS asoslari, DOM, ES6+, asinxron dasturlash',
    icon: 'braces',
    color: '#F7DF1E',
    questionsCount: 40,
    difficulty: 'medium',
    topics: ['O\'zgaruvchilar', 'Funksiyalar', 'DOM', 'Promises', 'ES6']
  }
];

export function getSubjectById(id) {
  return subjects.find(s => s.id === id);
}