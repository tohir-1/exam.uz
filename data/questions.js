export const questions = [
  // Matematika
  {
    id: 'math_001',
    subjectId: 'math',
    question: '2x + 5 = 15 tenglamasining yechimi qancha?',
    options: ['x = 5', 'x = 10', 'x = 2.5', 'x = 7'],
    correctAnswer: 0,
    explanation: '2x + 5 = 15 → 2x = 10 → x = 5',
    difficulty: 'easy',
    topic: 'Algebra'
  },
  {
    id: 'math_002',
    subjectId: 'math',
    question: 'Kvadratning yuzi 64 sm². Uning tomoni uzunligi qancha?',
    options: ['6 sm', '8 sm', '10 sm', '16 sm'],
    correctAnswer: 1,
    explanation: 'Yuz = a² → a = √64 = 8 sm',
    difficulty: 'easy',
    topic: 'Geometriya'
  },
  {
    id: 'math_003',
    subjectId: 'math',
    question: 'sin(90°) qiymati nima?',
    options: ['0', '1', '0.5', '-1'],
    correctAnswer: 1,
    explanation: 'sin(90°) = 1',
    difficulty: 'easy',
    topic: 'Trigonometriya'
  },
  {
    id: 'math_004',
    subjectId: 'math',
    question: 'f(x) = 2x + 3 funksiyasining f(4) qiymati?',
    options: ['8', '11', '14', '5'],
    correctAnswer: 1,
    explanation: 'f(4) = 2*4 + 3 = 11',
    difficulty: 'easy',
    topic: 'Funksiyalar'
  },
  {
    id: 'math_005',
    subjectId: 'math',
    question: 'x² - 5x + 6 = 0 tenglamasining ildizlari?',
    options: ['x=2, x=3', 'x=1, x=6', 'x=-2, x=-3', 'x=0, x=5'],
    correctAnswer: 0,
    explanation: '(x-2)(x-3)=0 → x=2 yoki x=3',
    difficulty: 'medium',
    topic: 'Tenglamalar'
  },
  {
    id: 'math_006',
    subjectId: 'math',
    question: 'Doira yuzi formulasini toping (r radius).',
    options: ['πr', '2πr', 'πr²', 'πd'],
    correctAnswer: 2,
    explanation: 'Doira yuzi S = πr²',
    difficulty: 'easy',
    topic: 'Geometriya'
  },
  {
    id: 'math_007',
    subjectId: 'math',
    question: 'log₁₀(100) = ?',
    options: ['1', '2', '10', '100'],
    correctAnswer: 1,
    explanation: '10² = 100, shuning uchun log₁₀(100) = 2',
    difficulty: 'medium',
    topic: 'Algebra'
  },
  {
    id: 'math_008',
    subjectId: 'math',
    question: 'Uchburchakning ichki burchaklari yig\'indisi?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: 1,
    explanation: 'Har qanday uchburchakning ichki burchaklari yig\'indisi 180°',
    difficulty: 'easy',
    topic: 'Geometriya'
  },
  {
    id: 'math_009',
    subjectId: 'math',
    question: '5! (5 faktorial) qiymati?',
    options: ['20', '60', '120', '24'],
    correctAnswer: 2,
    explanation: '5! = 5×4×3×2×1 = 120',
    difficulty: 'medium',
    topic: 'Algebra'
  },
  {
    id: 'math_010',
    subjectId: 'math',
    question: 'Vektor a = (3,4) ning uzunligi?',
    options: ['5', '7', '12', '1'],
    correctAnswer: 0,
    explanation: '|a| = √(3²+4²) = √25 = 5',
    difficulty: 'medium',
    topic: 'Geometriya'
  },

  // Ingliz tili
  {
    id: 'eng_001',
    subjectId: 'english',
    question: 'She _____ to school every day.',
    options: ['go', 'goes', 'going', 'went'],
    correctAnswer: 1,
    explanation: 'Third person singular present simple: goes',
    difficulty: 'easy',
    topic: 'Tenses'
  },
  {
    id: 'eng_002',
    subjectId: 'english',
    question: 'I have been living here _____ 2015.',
    options: ['for', 'since', 'from', 'at'],
    correctAnswer: 1,
    explanation: 'Since is used with a point in time (2015)',
    difficulty: 'easy',
    topic: 'Prepositions'
  },
  {
    id: 'eng_003',
    subjectId: 'english',
    question: 'The opposite of "beautiful" is:',
    options: ['pretty', 'ugly', 'nice', 'lovely'],
    correctAnswer: 1,
    explanation: 'Ugly is the antonym of beautiful',
    difficulty: 'easy',
    topic: 'Vocabulary'
  },
  {
    id: 'eng_004',
    subjectId: 'english',
    question: 'If it rains, we _____ stay at home.',
    options: ['will', 'would', 'can', 'must'],
    correctAnswer: 0,
    explanation: 'First conditional: If + present, will + verb',
    difficulty: 'medium',
    topic: 'Conditionals'
  },
  {
    id: 'eng_005',
    subjectId: 'english',
    question: 'Choose the correct article: ___ apple a day keeps the doctor away.',
    options: ['A', 'An', 'The', 'No article'],
    correctAnswer: 1,
    explanation: 'An is used before vowel sounds (apple)',
    difficulty: 'easy',
    topic: 'Articles'
  },
  {
    id: 'eng_006',
    subjectId: 'english',
    question: 'He _____ already finished his homework.',
    options: ['have', 'has', 'had', 'having'],
    correctAnswer: 1,
    explanation: 'Present perfect with third person singular: has',
    difficulty: 'easy',
    topic: 'Tenses'
  },
  {
    id: 'eng_007',
    subjectId: 'english',
    question: 'What is the past participle of "write"?',
    options: ['wrote', 'written', 'writing', 'writes'],
    correctAnswer: 1,
    explanation: 'write - wrote - written',
    difficulty: 'medium',
    topic: 'Tenses'
  },
  {
    id: 'eng_008',
    subjectId: 'english',
    question: 'She is interested _____ learning languages.',
    options: ['on', 'in', 'at', 'for'],
    correctAnswer: 1,
    explanation: 'Interested in + noun/gerund',
    difficulty: 'easy',
    topic: 'Prepositions'
  },
  {
    id: 'eng_009',
    subjectId: 'english',
    question: 'The book _____ by J.K. Rowling.',
    options: ['wrote', 'was written', 'written', 'is writing'],
    correctAnswer: 1,
    explanation: 'Passive voice: was written',
    difficulty: 'medium',
    topic: 'Passive Voice'
  },
  {
    id: 'eng_010',
    subjectId: 'english',
    question: 'I wish I _____ taller.',
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 2,
    explanation: 'Wish + past subjunctive: were (even for I/he/she)',
    difficulty: 'hard',
    topic: 'Conditionals'
  },

  // Ona tili
  {
    id: 'uzb_001',
    subjectId: 'uzbek',
    question: '"Kitob" so\'zi qanday so\'z turkumi?',
    options: ['Fe\'l', 'Ot', 'Sifat', 'Ravish'],
    correctAnswer: 1,
    explanation: 'Kitob - ot so\'z turkumi',
    difficulty: 'easy',
    topic: 'Grammatika'
  },
  {
    id: 'uzb_002',
    subjectId: 'uzbek',
    question: 'Qaysi so\'zda imlo xatosi bor?',
    options: ['Maktab', 'O\'qituvchi', 'Darsxona', 'Talaba'],
    correctAnswer: 2,
    explanation: 'To\'g\'ri yozilishi: darsxona emas, balki "darsxona" ba\'zi manbalarda, lekin standart "darsxona" - aslida "dars" + "xona". To\'g\'ri variantlarni tekshiring. (Namuna)',
    difficulty: 'medium',
    topic: 'Imlo'
  },
  {
    id: 'uzb_003',
    subjectId: 'uzbek',
    question: 'Alisher Navoiy qaysi asarning muallifi?',
    options: ['Boburnoma', 'Xamsa', 'O\'tkan kunlar', 'Mehrobdan chayon'],
    correctAnswer: 1,
    explanation: 'Alisher Navoiy "Xamsa" asarining muallifi',
    difficulty: 'easy',
    topic: 'Adabiyot'
  },
  {
    id: 'uzb_004',
    subjectId: 'uzbek',
    question: '"Yugurmoq" fe\'lining buyruq mayli shakli?',
    options: ['Yugur', 'Yuguradi', 'Yugurgan', 'Yugurayotgan'],
    correctAnswer: 0,
    explanation: 'Buyruq mayli: Yugur!',
    difficulty: 'easy',
    topic: 'Grammatika'
  },
  {
    id: 'uzb_005',
    subjectId: 'uzbek',
    question: 'Qaysi so\'z yasama ot hisoblanadi?',
    options: ['Uy', 'Kitobxon', 'Suv', 'Yer'],
    correctAnswer: 1,
    explanation: 'Kitob + xon = kitobxon (yasama ot)',
    difficulty: 'medium',
    topic: 'Soz yasalishi'
  },

  // Tarix
  {
    id: 'his_001',
    subjectId: 'history',
    question: 'O\'zbekiston mustaqillikka qachon erishdi?',
    options: ['1990-yil 1-sentabr', '1991-yil 1-sentabr', '1991-yil 31-avgust', '1992-yil 1-yanvar'],
    correctAnswer: 2,
    explanation: 'O\'zbekiston 1991-yil 31-avgustda mustaqillik e\'lon qildi',
    difficulty: 'easy',
    topic: 'O\'zbekiston tarixi'
  },
  {
    id: 'his_002',
    subjectId: 'history',
    question: 'Amir Temur qachon tug\'ilgan?',
    options: ['1336-yil', '1405-yil', '1227-yil', '1483-yil'],
    correctAnswer: 0,
    explanation: 'Amir Temur 1336-yilda tug\'ilgan',
    difficulty: 'medium',
    topic: 'O\'zbekiston tarixi'
  },
  {
    id: 'his_003',
    subjectId: 'history',
    question: 'Ikkinchi Jahon urushi qachon boshlangan?',
    options: ['1914', '1939', '1941', '1945'],
    correctAnswer: 1,
    explanation: 'II Jahon urushi 1939-yil 1-sentabrda boshlangan',
    difficulty: 'easy',
    topic: 'Jahon tarixi'
  },
  {
    id: 'his_004',
    subjectId: 'history',
    question: 'Samarqand shahri qaysi sulola davrida gullab-yashnagan?',
    options: ['Xorazmshohlar', 'Temuriylar', 'Shayboniylar', 'Qoraxoniylar'],
    correctAnswer: 1,
    explanation: 'Temuriylar davrida Samarqand poytaxt va madaniy markaz bo\'lgan',
    difficulty: 'medium',
    topic: 'O\'zbekiston tarixi'
  },
  {
    id: 'his_005',
    subjectId: 'history',
    question: 'Buyuk Ipak yo\'li nima uchun muhim edi?',
    options: ['Faqat savdo', 'Savdo va madaniy aloqalar', 'Faqat harbiy', 'Faqat diniy'],
    correctAnswer: 1,
    explanation: 'Buyuk Ipak yo\'li savdo va madaniy almashinuv uchun muhim bo\'lgan',
    difficulty: 'easy',
    topic: 'Madaniyat'
  },

  // Biologiya
  {
    id: 'bio_001',
    subjectId: 'biology',
    question: 'Odam tanasidagi eng katta organ qaysi?',
    options: ['Jigar', 'Teri', 'O\'pka', 'Yurak'],
    correctAnswer: 1,
    explanation: 'Teri - odam tanasidagi eng katta organ',
    difficulty: 'easy',
    topic: 'Anatomiya'
  },
  {
    id: 'bio_002',
    subjectId: 'biology',
    question: 'Fotosintez jarayoni qayerda kechadi?',
    options: ['Ildizda', 'Bargda', 'Gulda', 'Mevada'],
    correctAnswer: 1,
    explanation: 'Fotosintez asosan bargdagi xloroplastlarda kechadi',
    difficulty: 'easy',
    topic: 'Botanika'
  },
  {
    id: 'bio_003',
    subjectId: 'biology',
    question: 'DNK qanday shaklda saqlanadi?',
    options: ['Ikkilamchi spiral', 'To\'g\'ri chiziq', 'Sfera', 'Kub'],
    correctAnswer: 0,
    explanation: 'DNK qo\'sh spiral (double helix) shaklida',
    difficulty: 'medium',
    topic: 'Genetika'
  },
  {
    id: 'bio_004',
    subjectId: 'biology',
    question: 'Qon aylanish tizimining markaziy organi?',
    options: ['Miya', 'Yurak', 'Jigar', 'Buyrak'],
    correctAnswer: 1,
    explanation: 'Yurak - qon aylanish tizimining markaziy organi',
    difficulty: 'easy',
    topic: 'Anatomiya'
  },
  {
    id: 'bio_005',
    subjectId: 'biology',
    question: 'Hujayraning energetik stansiyasi nima deb ataladi?',
    options: ['Yadro', 'Mitoxondriya', 'Ribosoma', 'Lizosoma'],
    correctAnswer: 1,
    explanation: 'Mitoxondriya - hujayraning energetik stansiyasi',
    difficulty: 'medium',
    topic: 'Anatomiya'
  },

  // Kimyo
  {
    id: 'chem_001',
    subjectId: 'chemistry',
    question: 'Suvning kimyoviy formulasi?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 0,
    explanation: 'Suv - H2O',
    difficulty: 'easy',
    topic: 'Anorganik'
  },
  {
    id: 'chem_002',
    subjectId: 'chemistry',
    question: 'Atomning musbat zaryadlangan qismi?',
    options: ['Elektron', 'Proton', 'Neytron', 'Molekula'],
    correctAnswer: 1,
    explanation: 'Proton - musbat zaryadlangan',
    difficulty: 'easy',
    topic: 'Anorganik'
  },
  {
    id: 'chem_003',
    subjectId: 'chemistry',
    question: 'pH = 7 bo\'lgan eritma qanday?',
    options: ['Kislotali', 'Ishqoriy', 'Neytral', 'Kuchli kislotali'],
    correctAnswer: 2,
    explanation: 'pH = 7 - neytral muhit',
    difficulty: 'easy',
    topic: 'Reaksiyalar'
  },
  {
    id: 'chem_004',
    subjectId: 'chemistry',
    question: 'Metanning formulasi?',
    options: ['CH4', 'C2H6', 'C3H8', 'C2H4'],
    correctAnswer: 0,
    explanation: 'Metan - CH4',
    difficulty: 'easy',
    topic: 'Organik'
  },
  {
    id: 'chem_005',
    subjectId: 'chemistry',
    question: 'Oksidlanish darajasi 0 bo\'lgan element?',
    options: ['Na+', 'Cl-', 'O2', 'H+'],
    correctAnswer: 2,
    explanation: 'Oddiy moddalar (O2) oksidlanish darajasi 0',
    difficulty: 'medium',
    topic: 'Anorganik'
  },

  // Fizika
  {
    id: 'phy_001',
    subjectId: 'physics',
    question: 'Yorug\'lik tezligi vakuumda taxminan qancha?',
    options: ['3×10⁸ m/s', '3×10⁶ m/s', '3×10⁵ m/s', '3×10¹⁰ m/s'],
    correctAnswer: 0,
    explanation: 'Yorug\'lik tezligi ≈ 3×10⁸ m/s',
    difficulty: 'easy',
    topic: 'Optika'
  },
  {
    id: 'phy_002',
    subjectId: 'physics',
    question: 'Nyutonning ikkinchi qonuni formulasi?',
    options: ['F = ma', 'F = mv', 'E = mc²', 'P = mv'],
    correctAnswer: 0,
    explanation: 'F = m × a',
    difficulty: 'easy',
    topic: 'Mexanika'
  },
  {
    id: 'phy_003',
    subjectId: 'physics',
    question: 'Elektr toki birligi?',
    options: ['Volt', 'Amper', 'Om', 'Vatt'],
    correctAnswer: 1,
    explanation: 'Elektr toki birligi - Amper (A)',
    difficulty: 'easy',
    topic: 'Elektr'
  },
  {
    id: 'phy_004',
    subjectId: 'physics',
    question: 'Potensial energiya formulasi?',
    options: ['mgh', '½mv²', 'Fd', 'Pt'],
    correctAnswer: 0,
    explanation: 'Ep = mgh',
    difficulty: 'easy',
    topic: 'Mexanika'
  },
  {
    id: 'phy_005',
    subjectId: 'physics',
    question: 'Qaysi qonun termodinamikaning birinchi qonuniga tegishli?',
    options: ['Energiya saqlanish', 'Entropiya oshishi', 'Absolyut nol', 'Boyle qonuni'],
    correctAnswer: 0,
    explanation: 'Termodinamikaning I qonuni - energiya saqlanish qonuni',
    difficulty: 'medium',
    topic: 'Termodinamika'
  },

  // Informatika
  {
    id: 'inf_001',
    subjectId: 'informatics',
    question: 'HTML nima uchun ishlatiladi?',
    options: ['Stillash', 'Veb sahifa strukturasi', 'Dasturlash mantiqi', 'Ma\'lumotlar bazasi'],
    correctAnswer: 1,
    explanation: 'HTML - HyperText Markup Language, sahifa strukturasi uchun',
    difficulty: 'easy',
    topic: 'HTML'
  },
  {
    id: 'inf_002',
    subjectId: 'informatics',
    question: 'CSS da rangni qanday belgilash mumkin?',
    options: ['faqat nom bilan', 'hex, rgb, nom', 'faqat rgb', 'faqat hex'],
    correctAnswer: 1,
    explanation: 'CSS da rang: nom, hex (#fff), rgb(), hsl() va boshqalar',
    difficulty: 'easy',
    topic: 'CSS'
  },
  {
    id: 'inf_003',
    subjectId: 'informatics',
    question: 'JavaScript da o\'zgaruvchi e\'lon qilish uchun qaysi kalit so\'z ishlatiladi (ES6)?',
    options: ['var, let, const', 'faqat var', 'int, string', 'define'],
    correctAnswer: 0,
    explanation: 'ES6 da let va const tavsiya etiladi, var ham ishlaydi',
    difficulty: 'easy',
    topic: 'JavaScript'
  },
  {
    id: 'inf_004',
    subjectId: 'informatics',
    question: 'Massivdagi elementlarni aylantirish uchun qaysi metod ishlatiladi?',
    options: ['map()', 'forEach()', 'filter()', 'barchasi'],
    correctAnswer: 3,
    explanation: 'map, forEach, filter - hammasi massiv metodlari',
    difficulty: 'medium',
    topic: 'JavaScript'
  },
  {
    id: 'inf_005',
    subjectId: 'informatics',
    question: 'Algoritm nima?',
    options: ['Dasturlash tili', 'Muammoni yechish qadamlari', 'Kompyuter qurilmasi', 'Ma\'lumotlar bazasi'],
    correctAnswer: 1,
    explanation: 'Algoritm - muammoni yechishning aniq qadamlari ketma-ketligi',
    difficulty: 'easy',
    topic: 'Algoritmlar'
  },
  {
    id: 'inf_006',
    subjectId: 'informatics',
    question: 'HTML da <p> tegi nima uchun?',
    options: ['Sarlavha', 'Paragraf', 'Rasm', 'Havola'],
    correctAnswer: 1,
    explanation: '<p> - paragraph (paragraf)',
    difficulty: 'easy',
    topic: 'HTML'
  },
  {
    id: 'inf_007',
    subjectId: 'informatics',
    question: 'CSS da flexbox asosiy container xususiyati?',
    options: ['display: flex', 'display: block', 'position: relative', 'float: left'],
    correctAnswer: 0,
    explanation: 'display: flex - flex container yaratadi',
    difficulty: 'medium',
    topic: 'CSS'
  },
  {
    id: 'inf_008',
    subjectId: 'informatics',
    question: 'JavaScript da funksiya e\'lon qilish?',
    options: ['function name() {}', 'def name():', 'func name {}', 'method name()'],
    correctAnswer: 0,
    explanation: 'function nomi() { ... }',
    difficulty: 'easy',
    topic: 'JavaScript'
  },

  // IELTS / CEFR / Grammar samples
  {
    id: 'ielts_001',
    subjectId: 'ielts',
    question: 'IELTS Reading band score 7.0 uchun taxminan nechta to\'g\'ri javob kerak (Academic)?',
    options: ['20-23', '30-32', '35-37', '40'],
    correctAnswer: 1,
    explanation: 'Taxminan 30-32 to\'g\'ri javob band 7.0 uchun (o\'zgarishi mumkin)',
    difficulty: 'medium',
    topic: 'Reading'
  },
  {
    id: 'ielts_002',
    subjectId: 'ielts',
    question: 'IELTS Listening da nechta section bor?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'IELTS Listening 4 sectiondan iborat',
    difficulty: 'easy',
    topic: 'Listening'
  },
  {
    id: 'gram_001',
    subjectId: 'grammar',
    question: 'Present Perfect Continuous ishlatiladi:',
    options: ['O\'tgan aniq vaqt', 'Hozirgacha davom etayotgan harakat', 'Kelajak reja', 'Odat'],
    correctAnswer: 1,
    explanation: 'Present Perfect Continuous - boshlangan va hali davom etayotgan harakat',
    difficulty: 'medium',
    topic: 'Tenses'
  },
  {
    id: 'gram_002',
    subjectId: 'grammar',
    question: 'Zero conditional ishlatiladi:',
    options: ['Real kelajak', 'Umumiy haqiqatlar', 'Imaginar holat', 'O\'tgan pushaymonlik'],
    correctAnswer: 1,
    explanation: 'Zero conditional: If + present, present (umumiy haqiqatlar)',
    difficulty: 'medium',
    topic: 'Conditionals'
  },

  // Haydovchilik
  {
    id: 'drv_001',
    subjectId: 'driving',
    question: 'Qizil svetofor nima anglatadi?',
    options: ['Harakatlanish mumkin', 'To\'xtash', 'Ehtiyot', 'Tezlikni oshirish'],
    correctAnswer: 1,
    explanation: 'Qizil - to\'xtash signali',
    difficulty: 'easy',
    topic: 'Yo\'l belgilari'
  },
  {
    id: 'drv_002',
    subjectId: 'driving',
    question: 'Shahar ichida maksimal tezlik odatda?',
    options: ['40 km/soat', '60 km/soat', '80 km/soat', '100 km/soat'],
    correctAnswer: 1,
    explanation: 'Ko\'p shaharlarda 60 km/soat',
    difficulty: 'easy',
    topic: 'Qoidalar'
  },
  {
    id: 'drv_003',
    subjectId: 'driving',
    question: 'Xavfsizlik kamari kimlar uchun majburiy?',
    options: ['Faqat haydovchi', 'Haydovchi va old o\'rindiq', 'Barcha yo\'lovchilar', 'Faqat bolalar'],
    correctAnswer: 2,
    explanation: 'Barcha yo\'lovchilar uchun xavfsizlik kamari majburiy',
    difficulty: 'easy',
    topic: 'Xavfsizlik'
  },
  {
    id: 'drv_004',
    subjectId: 'driving',
    question: 'Piyoda o\'tish joyida nima qilish kerak?',
    options: ['Tezlikni oshirish', 'To\'xtamasdan o\'tish', 'Piyodalarga yo\'l berish', 'Signal berish'],
    correctAnswer: 2,
    explanation: 'Piyoda o\'tish joyida piyodalarga yo\'l berish shart',
    difficulty: 'easy',
    topic: 'Qoidalar'
  },
  {
    id: 'drv_005',
    subjectId: 'driving',
    question: 'Alkogol ichgan holda haydash?',
    options: ['Ruxsat etiladi', 'Qisman ruxsat', 'Taqiqlanadi', 'Faqat kechasi'],
    correctAnswer: 2,
    explanation: 'Alkogol ta\'sirida haydash taqiqlanadi',
    difficulty: 'easy',
    topic: 'Xavfsizlik'
  },

  // ========== KO'PROQ MATEMATIKA ==========
  { id: 'math_011', subjectId: 'math', question: '√144 qiymati?', options: ['10', '12', '14', '16'], correctAnswer: 1, explanation: '12×12=144', difficulty: 'easy', topic: 'Algebra' },
  { id: 'math_012', subjectId: 'math', question: '3² + 4² = ?', options: ['7', '12', '25', '49'], correctAnswer: 2, explanation: '9+16=25', difficulty: 'easy', topic: 'Algebra' },
  { id: 'math_013', subjectId: 'math', question: 'To\'g\'ri burchakli uchburchakda katetlar 3 va 4. Gipotenuza?', options: ['5', '6', '7', '12'], correctAnswer: 0, explanation: '3-4-5 uchburchak', difficulty: 'easy', topic: 'Geometriya' },
  { id: 'math_014', subjectId: 'math', question: '0.25 ni foizda ifodalang', options: ['2.5%', '25%', '0.25%', '250%'], correctAnswer: 1, explanation: '0.25 = 25/100 = 25%', difficulty: 'easy', topic: 'Algebra' },
  { id: 'math_015', subjectId: 'math', question: 'x/4 = 3 tenglamasining yechimi?', options: ['x=7', 'x=12', 'x=0.75', 'x=1'], correctAnswer: 1, explanation: 'x = 3×4 = 12', difficulty: 'easy', topic: 'Tenglamalar' },
  { id: 'math_016', subjectId: 'math', question: 'Parallelogramm yuzi formulasini toping', options: ['a×b', 'a×h', 'πr²', '(a+b)/2'], correctAnswer: 1, explanation: 'S = a × h (asos × balandlik)', difficulty: 'medium', topic: 'Geometriya' },
  { id: 'math_017', subjectId: 'math', question: 'cos(0°) = ?', options: ['0', '1', '-1', '0.5'], correctAnswer: 1, explanation: 'cos(0°)=1', difficulty: 'easy', topic: 'Trigonometriya' },
  { id: 'math_018', subjectId: 'math', question: '10 sonining 15% i qancha?', options: ['1', '1.5', '15', '0.15'], correctAnswer: 1, explanation: '10×0.15=1.5', difficulty: 'easy', topic: 'Algebra' },
  { id: 'math_019', subjectId: 'math', question: 'Kubning hajmi formulasini toping (a — qirra)', options: ['a²', 'a³', '6a²', '4a'], correctAnswer: 1, explanation: 'V = a³', difficulty: 'easy', topic: 'Geometriya' },
  { id: 'math_020', subjectId: 'math', question: '2⁵ = ?', options: ['10', '25', '32', '64'], correctAnswer: 2, explanation: '2×2×2×2×2=32', difficulty: 'easy', topic: 'Algebra' },
  { id: 'math_021', subjectId: 'math', question: 'O\'rta arifmetik: 4, 6, 8, 10', options: ['6', '7', '8', '28'], correctAnswer: 1, explanation: '(4+6+8+10)/4 = 7', difficulty: 'easy', topic: 'Algebra' },
  { id: 'math_022', subjectId: 'math', question: 'π ning taxminiy qiymati?', options: ['2.14', '3.14', '4.14', '1.41'], correctAnswer: 1, explanation: 'π ≈ 3.14159...', difficulty: 'easy', topic: 'Geometriya' },
  { id: 'math_023', subjectId: 'math', question: 'x² = 49 tenglamasining musbat yechimi?', options: ['5', '6', '7', '9'], correctAnswer: 2, explanation: 'x = 7 (musbat)', difficulty: 'easy', topic: 'Tenglamalar' },
  { id: 'math_024', subjectId: 'math', question: 'Teng yonli uchburchakda burchaklar yig\'indisi?', options: ['90°', '180°', '270°', '60°'], correctAnswer: 1, explanation: 'Har qanday uchburchakda 180°', difficulty: 'easy', topic: 'Geometriya' },
  { id: 'math_025', subjectId: 'math', question: 'log₂(8) = ?', options: ['2', '3', '4', '8'], correctAnswer: 1, explanation: '2³=8', difficulty: 'medium', topic: 'Algebra' },

  // ========== KO'PROQ INGLIZ TILI ==========
  { id: 'eng_011', subjectId: 'english', question: 'They _____ football every Sunday.', options: ['plays', 'play', 'playing', 'played'], correctAnswer: 1, explanation: 'Plural subject → play', difficulty: 'easy', topic: 'Tenses' },
  { id: 'eng_012', subjectId: 'english', question: 'I _____ to the cinema yesterday.', options: ['go', 'goes', 'went', 'gone'], correctAnswer: 2, explanation: 'Past simple: went', difficulty: 'easy', topic: 'Tenses' },
  { id: 'eng_013', subjectId: 'english', question: 'She is _____ than her sister.', options: ['tall', 'taller', 'tallest', 'more tall'], correctAnswer: 1, explanation: 'Comparative: taller', difficulty: 'easy', topic: 'Grammar' },
  { id: 'eng_014', subjectId: 'english', question: 'There _____ many books on the table.', options: ['is', 'are', 'was', 'be'], correctAnswer: 1, explanation: 'Many books → are', difficulty: 'easy', topic: 'Grammar' },
  { id: 'eng_015', subjectId: 'english', question: 'He can _____ English very well.', options: ['speaks', 'speak', 'speaking', 'spoke'], correctAnswer: 1, explanation: 'Modal + base form: speak', difficulty: 'easy', topic: 'Grammar' },
  { id: 'eng_016', subjectId: 'english', question: 'We have lived here _____ five years.', options: ['since', 'for', 'from', 'during'], correctAnswer: 1, explanation: 'for + period of time', difficulty: 'easy', topic: 'Prepositions' },
  { id: 'eng_017', subjectId: 'english', question: 'This is _____ interesting book.', options: ['a', 'an', 'the', '—'], correctAnswer: 1, explanation: 'an + vowel sound', difficulty: 'easy', topic: 'Articles' },
  { id: 'eng_018', subjectId: 'english', question: 'If I _____ rich, I would travel the world.', options: ['am', 'was', 'were', 'be'], correctAnswer: 2, explanation: 'Second conditional: were', difficulty: 'medium', topic: 'Conditionals' },
  { id: 'eng_019', subjectId: 'english', question: 'The letter was _____ by my friend.', options: ['write', 'wrote', 'written', 'writing'], correctAnswer: 2, explanation: 'Passive: was written', difficulty: 'medium', topic: 'Passive Voice' },
  { id: 'eng_020', subjectId: 'english', question: 'Synonym of "happy"?', options: ['sad', 'angry', 'glad', 'tired'], correctAnswer: 2, explanation: 'glad ≈ happy', difficulty: 'easy', topic: 'Vocabulary' },
  { id: 'eng_021', subjectId: 'english', question: 'I look forward _____ hearing from you.', options: ['to', 'for', 'at', 'in'], correctAnswer: 0, explanation: 'look forward to + gerund', difficulty: 'medium', topic: 'Prepositions' },
  { id: 'eng_022', subjectId: 'english', question: 'Neither John _____ Mary came.', options: ['or', 'nor', 'and', 'but'], correctAnswer: 1, explanation: 'neither ... nor', difficulty: 'medium', topic: 'Grammar' },
  { id: 'eng_023', subjectId: 'english', question: 'By this time tomorrow, I _____ the exam.', options: ['finish', 'will finish', 'will have finished', 'finished'], correctAnswer: 2, explanation: 'Future perfect', difficulty: 'hard', topic: 'Tenses' },
  { id: 'eng_024', subjectId: 'english', question: 'She asked me where I _____.', options: ['live', 'lived', 'living', 'lives'], correctAnswer: 1, explanation: 'Reported speech: past', difficulty: 'medium', topic: 'Grammar' },
  { id: 'eng_025', subjectId: 'english', question: 'How _____ sugar do you need?', options: ['many', 'much', 'few', 'a lot'], correctAnswer: 1, explanation: 'uncountable → much', difficulty: 'easy', topic: 'Grammar' },

  // ========== DASTURLASH / INFORMATIKA (ko'p) ==========
  { id: 'inf_009', subjectId: 'informatics', question: 'HTML da havola (link) qaysi teg bilan yoziladi?', options: ['<link>', '<a>', '<href>', '<url>'], correctAnswer: 1, explanation: '<a href="...">', difficulty: 'easy', topic: 'HTML' },
  { id: 'inf_010', subjectId: 'informatics', question: 'CSS da matn rangini o\'zgartirish?', options: ['font-color', 'text-color', 'color', 'font-style'], correctAnswer: 2, explanation: 'color: ...', difficulty: 'easy', topic: 'CSS' },
  { id: 'inf_011', subjectId: 'informatics', question: 'JavaScript da massiv yaratish?', options: ['array()', '[]', '{}', 'new List()'], correctAnswer: 1, explanation: 'const arr = []', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_012', subjectId: 'informatics', question: 'console.log() nima qiladi?', options: ['Xatolik chiqaradi', 'Konsolga chiqaradi', 'Fayl yozadi', 'Sahifani yangilaydi'], correctAnswer: 1, explanation: 'Konsolga xabar chiqaradi', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_013', subjectId: 'informatics', question: 'HTML da rasm qaysi teg bilan?', options: ['<image>', '<img>', '<pic>', '<src>'], correctAnswer: 1, explanation: '<img src="...">', difficulty: 'easy', topic: 'HTML' },
  { id: 'inf_014', subjectId: 'informatics', question: 'CSS da display: flex nima uchun?', options: ['Yashirish', 'Flexbox layout', 'Animatsiya', 'Rang'], correctAnswer: 1, explanation: 'Flexible box layout', difficulty: 'medium', topic: 'CSS' },
  { id: 'inf_015', subjectId: 'informatics', question: 'JavaScript da if sharti qanday yoziladi?', options: ['if x > 0 then', 'if (x > 0) {}', 'if x > 0 {}', 'when x > 0'], correctAnswer: 1, explanation: 'if (condition) { }', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_016', subjectId: 'informatics', question: '=== operatori nima qiladi?', options: ['Tenglik (tip bilan)', 'Faqat qiymat', 'Tayinlash', 'Solishtirish emas'], correctAnswer: 0, explanation: 'Strict equality (qiymat + tip)', difficulty: 'medium', topic: 'JavaScript' },
  { id: 'inf_017', subjectId: 'informatics', question: 'Git da o\'zgarishlarni saqlash buyrug\'i?', options: ['git save', 'git commit', 'git push', 'git add all'], correctAnswer: 1, explanation: 'git commit -m "..."', difficulty: 'medium', topic: 'Algoritmlar' },
  { id: 'inf_018', subjectId: 'informatics', question: 'JSON nima?', options: ['Dasturlash tili', 'Ma\'lumot formati', 'Brauzer', 'Server'], correctAnswer: 1, explanation: 'JavaScript Object Notation', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_019', subjectId: 'informatics', question: 'CSS da margin nima?', options: ['Ichki bo\'shliq', 'Tashqi bo\'shliq', 'Chegara', 'Fon'], correctAnswer: 1, explanation: 'Element tashqarisidagi bo\'shliq', difficulty: 'easy', topic: 'CSS' },
  { id: 'inf_020', subjectId: 'informatics', question: 'document.getElementById() nima qiladi?', options: ['Yangi element yaratadi', 'ID bo\'yicha element topadi', 'Sahifani o\'chiradi', 'CSS qo\'shadi'], correctAnswer: 1, explanation: 'ID bo\'yicha DOM element', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_021', subjectId: 'informatics', question: 'HTML5 da video tegi?', options: ['<media>', '<video>', '<movie>', '<play>'], correctAnswer: 1, explanation: '<video src="...">', difficulty: 'easy', topic: 'HTML' },
  { id: 'inf_022', subjectId: 'informatics', question: 'CSS Grid va Flexbox farqi asosan?', options: ['Rang', '1D vs 2D layout', 'Animatsiya', 'Font'], correctAnswer: 1, explanation: 'Flex 1D, Grid 2D', difficulty: 'medium', topic: 'CSS' },
  { id: 'inf_023', subjectId: 'informatics', question: 'JavaScript da const nima?', options: ['O\'zgaruvchi (o\'zgaradi)', 'O\'zgarmas o\'zgaruvchi', 'Funksiya', 'Class'], correctAnswer: 1, explanation: 'const — qayta tayinlab bo\'lmaydi', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_024', subjectId: 'informatics', question: 'API nima?', options: ['Dastur interfeysi', 'Faqat ma\'lumotlar bazasi', 'Operatsion tizim', 'Brauzer'], correctAnswer: 0, explanation: 'Application Programming Interface', difficulty: 'medium', topic: 'Algoritmlar' },
  { id: 'inf_025', subjectId: 'informatics', question: 'localStorage ma\'lumotni qayerda saqlaydi?', options: ['Serverda', 'Brauzerda', 'Cloud da', 'Email da'], correctAnswer: 1, explanation: 'Brauzerning local storage', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_026', subjectId: 'informatics', question: 'HTTP status 404 nima anglatadi?', options: ['OK', 'Not Found', 'Server Error', 'Redirect'], correctAnswer: 1, explanation: '404 — topilmadi', difficulty: 'easy', topic: 'Algoritmlar' },
  { id: 'inf_027', subjectId: 'informatics', question: 'JavaScript da massiv uzunligi?', options: ['arr.size', 'arr.length', 'arr.count()', 'arr.len'], correctAnswer: 1, explanation: 'arr.length', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_028', subjectId: 'informatics', question: 'CSS da #id va .class farqi?', options: ['# class, . id', '# id, . class', 'Ikkalasi bir xil', 'Faqat rang'], correctAnswer: 1, explanation: '#id, .class', difficulty: 'easy', topic: 'CSS' },
  { id: 'inf_029', subjectId: 'informatics', question: 'Promise nima uchun ishlatiladi?', options: ['HTML yozish', 'Asinxron operatsiyalar', 'CSS stillash', 'Rasm yuklash faqat'], correctAnswer: 1, explanation: 'Async/await, then/catch', difficulty: 'hard', topic: 'JavaScript' },
  { id: 'inf_030', subjectId: 'informatics', question: 'Responsive design nima?', options: ['Faqat desktop', 'Barcha qurilmalarga moslashuv', 'Faqat mobile', 'Print stillar'], correctAnswer: 1, explanation: 'Turli ekran o\'lchamlari', difficulty: 'easy', topic: 'CSS' },
  { id: 'inf_031', subjectId: 'informatics', question: 'JavaScript da for loop sintaksisi?', options: ['for i in range', 'for (let i=0; i<n; i++)', 'foreach i', 'loop i'], correctAnswer: 1, explanation: 'for (init; condition; step)', difficulty: 'easy', topic: 'JavaScript' },
  { id: 'inf_032', subjectId: 'informatics', question: 'Semantic HTML teglariga misol?', options: ['<div>, <span>', '<header>, <article>, <footer>', '<b>, <i>', '<font>'], correctAnswer: 1, explanation: 'header, nav, main, article, footer', difficulty: 'medium', topic: 'HTML' },
  { id: 'inf_033', subjectId: 'informatics', question: 'npm nima?', options: ['Brauzer', 'Node package manager', 'CSS framework', 'Database'], correctAnswer: 1, explanation: 'Node.js paket menejeri', difficulty: 'medium', topic: 'Algoritmlar' },
  { id: 'inf_034', subjectId: 'informatics', question: 'event.preventDefault() nima qiladi?', options: ['Eventni o\'chiradi', 'Default harakatni to\'xtatadi', 'Sahifani yangilaydi', 'Xatolik beradi'], correctAnswer: 1, explanation: 'Form submit kabi defaultni bloklaydi', difficulty: 'medium', topic: 'JavaScript' },
  { id: 'inf_035', subjectId: 'informatics', question: 'CSS da position: absolute nisbatan qayerga joylashadi?', options: ['Viewport', 'Eng yaqin positioned ota', 'Body doim', 'Screen'], correctAnswer: 1, explanation: 'Nearest positioned ancestor', difficulty: 'hard', topic: 'CSS' },
  { id: 'inf_036', subjectId: 'informatics', question: 'typeof null JavaScript da nima qaytaradi?', options: ['"null"', '"object"', '"undefined"', '"number"'], correctAnswer: 1, explanation: 'Tarixiy xato: typeof null === "object"', difficulty: 'hard', topic: 'JavaScript' },
  { id: 'inf_037', subjectId: 'informatics', question: 'REST API da GET metodi nima uchun?', options: ['Ma\'lumot o\'chirish', 'Ma\'lumot olish', 'Yangi yaratish', 'Yangilash'], correctAnswer: 1, explanation: 'GET — read/retrieve', difficulty: 'medium', topic: 'Algoritmlar' },
  { id: 'inf_038', subjectId: 'informatics', question: 'Vite nima?', options: ['Database', 'Frontend build tool', 'Backend framework', 'OS'], correctAnswer: 1, explanation: 'Zamonaviy frontend bundler/dev server', difficulty: 'medium', topic: 'Algoritmlar' },
  { id: 'inf_039', subjectId: 'informatics', question: 'CSS da z-index nima uchun?', options: ['Rang', 'Qatlam tartibi (stacking)', 'Font o\'lchami', 'Margin'], correctAnswer: 1, explanation: 'Elementlarning ustma-ust tartibi', difficulty: 'medium', topic: 'CSS' },
  { id: 'inf_040', subjectId: 'informatics', question: 'async/await nima bilan bog\'liq?', options: ['Faqat CSS', 'Promise asinxron kod', 'HTML teglar', 'Git'], correctAnswer: 1, explanation: 'Promise asosidagi qulay sintaksis', difficulty: 'hard', topic: 'JavaScript' },

  // ========== BOSHQA FANLAR QO'SHIMCHA ==========
  { id: 'his_006', subjectId: 'history', question: 'Temur tuzuklari kimga tegishli?', options: ['Bobur', 'Amir Temur', 'Ulug\'bek', 'Navoiy'], correctAnswer: 1, explanation: 'Amir Temur', difficulty: 'easy', topic: 'O\'zbekiston tarixi' },
  { id: 'his_007', subjectId: 'history', question: 'Birinchi jahon urushi qachon tugagan?', options: ['1914', '1918', '1939', '1945'], correctAnswer: 1, explanation: '1918-yil', difficulty: 'easy', topic: 'Jahon tarixi' },
  { id: 'his_008', subjectId: 'history', question: 'Ulug\'bek rasadxonasi qayerda?', options: ['Buxoro', 'Samarqand', 'Xiva', 'Toshkent'], correctAnswer: 1, explanation: 'Samarqand', difficulty: 'easy', topic: 'O\'zbekiston tarixi' },
  { id: 'his_009', subjectId: 'history', question: 'Mustaqillik deklaratsiyasi qachon qabul qilingan?', options: ['1990', '1991', '1992', '1989'], correctAnswer: 1, explanation: '1991-yil 31-avgust', difficulty: 'easy', topic: 'O\'zbekiston tarixi' },
  { id: 'his_010', subjectId: 'history', question: 'Bobur qaysi saltanat asoschisi?', options: ['Temuriylar', 'Boburiylar (Hindiston)', 'Shayboniylar', 'Xorazmshohlar'], correctAnswer: 1, explanation: 'Boburiylar imperiyasi', difficulty: 'medium', topic: 'O\'zbekiston tarixi' },

  { id: 'bio_006', subjectId: 'biology', question: 'Odamda nechta juft o\'pka bor?', options: ['1', '2', '3', '4'], correctAnswer: 0, explanation: 'Bir juft (ikki) o\'pka', difficulty: 'easy', topic: 'Anatomiya' },
  { id: 'bio_007', subjectId: 'biology', question: 'Qonning qizil tanachalari nima deb ataladi?', options: ['Leykotsit', 'Eritrotsit', 'Trombotsit', 'Plazma'], correctAnswer: 1, explanation: 'Eritrotsitlar', difficulty: 'easy', topic: 'Anatomiya' },
  { id: 'bio_008', subjectId: 'biology', question: 'Fotosintez mahsuloti?', options: ['CO2', 'O2 va glyukoza', 'N2', 'Faqat suv'], correctAnswer: 1, explanation: 'Kislorod va organika', difficulty: 'easy', topic: 'Botanika' },
  { id: 'bio_009', subjectId: 'biology', question: 'DNK qayerda joylashgan?', options: ['Sitoplazma', 'Yadro', 'Membrana', 'Vakuola'], correctAnswer: 1, explanation: 'Asosan hujayra yadrosida', difficulty: 'easy', topic: 'Genetika' },
  { id: 'bio_010', subjectId: 'biology', question: 'Nerv tizimining asosiy hujayrasi?', options: ['Neyron', 'Eritrotsit', 'Osteotsit', 'Miotsit'], correctAnswer: 0, explanation: 'Neyron', difficulty: 'easy', topic: 'Anatomiya' },

  { id: 'chem_006', subjectId: 'chemistry', question: 'NaCl nima?', options: ['Suv', 'Osh tuzi', 'Shakar', 'Spirt'], correctAnswer: 1, explanation: 'Natriy xlorid — osh tuzi', difficulty: 'easy', topic: 'Anorganik' },
  { id: 'chem_007', subjectId: 'chemistry', question: 'Kislorodning kimyoviy belgisi?', options: ['Ox', 'O', 'Og', 'K'], correctAnswer: 1, explanation: 'O', difficulty: 'easy', topic: 'Anorganik' },
  { id: 'chem_008', subjectId: 'chemistry', question: 'pH < 7 bo\'lsa eritma?', options: ['Neytral', 'Kislotali', 'Ishqoriy', 'Tuzli'], correctAnswer: 1, explanation: 'Kislotali muhit', difficulty: 'easy', topic: 'Reaksiyalar' },
  { id: 'chem_009', subjectId: 'chemistry', question: 'CO2 formulasining nomi?', options: ['Uglerod monooksid', 'Uglerod dioksid', 'Metan', 'Ammiak'], correctAnswer: 1, explanation: 'Uglerod dioksid', difficulty: 'easy', topic: 'Anorganik' },
  { id: 'chem_010', subjectId: 'chemistry', question: 'Kimyoviy reaksiyada massa saqlanish qonuni kimniki?', options: ['Nyuton', 'Lomonosov / Lavoisier', 'Mendeleyev', 'Dalton'], correctAnswer: 1, explanation: 'Massa saqlanish', difficulty: 'medium', topic: 'Reaksiyalar' },

  { id: 'phy_006', subjectId: 'physics', question: 'Kuch birligi SI da?', options: ['Joule', 'Newton', 'Watt', 'Pascal'], correctAnswer: 1, explanation: 'Nyuton (N)', difficulty: 'easy', topic: 'Mexanika' },
  { id: 'phy_007', subjectId: 'physics', question: 'Tezlik formulasini toping', options: ['v = s/t', 'v = s×t', 'v = m/a', 'v = F×a'], correctAnswer: 0, explanation: 'v = s/t', difficulty: 'easy', topic: 'Mexanika' },
  { id: 'phy_008', subjectId: 'physics', question: 'Ohm qonuni?', options: ['U = I×R', 'P = U×I', 'F = ma', 'E = mc²'], correctAnswer: 0, explanation: 'U = I·R', difficulty: 'easy', topic: 'Elektr' },
  { id: 'phy_009', subjectId: 'physics', question: 'Yorug\'lik sinishi qonuni kimniki?', options: ['Nyuton', 'Snell', 'Faraday', 'Ohm'], correctAnswer: 1, explanation: 'Snell qonuni', difficulty: 'medium', topic: 'Optika' },
  { id: 'phy_010', subjectId: 'physics', question: 'Issiqlik o\'tkazuvchanlik nima?', options: ['Elektr oqimi', 'Issiqlik uzatilishi', 'Yorug\'lik', 'Tovush'], correctAnswer: 1, explanation: 'Issiqlikning modda orqali o\'tishi', difficulty: 'easy', topic: 'Termodinamika' },

  { id: 'uzb_006', subjectId: 'uzbek', question: '"Yugurayotgan" so\'zi qanday fe\'l shakli?', options: ['O\'tgan zamon', 'Hozirgi zamon sifatdosh', 'Buyruq', 'Kelasi zamon'], correctAnswer: 1, explanation: 'Hozirgi zamon sifatdoshi', difficulty: 'medium', topic: 'Grammatika' },
  { id: 'uzb_007', subjectId: 'uzbek', question: 'Qaysi so\'z ot?', options: ['Chiroyli', 'Kitob', 'Yugurmoq', 'Tez'], correctAnswer: 1, explanation: 'Kitob — ot', difficulty: 'easy', topic: 'Grammatika' },
  { id: 'uzb_008', subjectId: 'uzbek', question: 'Alisher Navoiy qaysi asrda yashagan?', options: ['XIV-XV', 'XVI-XVII', 'XIX', 'XX'], correctAnswer: 0, explanation: 'XV asr (1441–1501)', difficulty: 'medium', topic: 'Adabiyot' },
  { id: 'uzb_009', subjectId: 'uzbek', question: '"O\'qituvchi" so\'zi qanday yasalgan?', options: ['Oddiy', 'Yasama', 'Qo\'shma', 'Qisqartma'], correctAnswer: 1, explanation: 'o\'qi + tuvchi', difficulty: 'easy', topic: 'Soz yasalishi' },
  { id: 'uzb_010', subjectId: 'uzbek', question: 'Gapda ega nima?', options: ['Harakat', 'Kim yoki nima haqida', 'Belgisi', 'Holat'], correctAnswer: 1, explanation: 'Ega — kim/nima haqida gap ketayotgani', difficulty: 'easy', topic: 'Grammatika' },

  { id: 'drv_006', subjectId: 'driving', question: 'Sariq svetofor nima anglatadi?', options: ['Harakatlan', 'To\'xta', 'Ehtiyot / tayyorlan', 'Orqaga'], correctAnswer: 2, explanation: 'Ehtiyot, to\'xtashga tayyorlan', difficulty: 'easy', topic: 'Yo\'l belgilari' },
  { id: 'drv_007', subjectId: 'driving', question: 'Avtomobilda bolalar qayerda o\'tirishi kerak?', options: ['Old o\'rindiq doim', 'Maxsus o\'rindiqda (yoshga qarab)', 'Bagajda', 'Yukxonada'], correctAnswer: 1, explanation: 'Yoshga mos bolalar o\'rindig\'i', difficulty: 'easy', topic: 'Xavfsizlik' },
  { id: 'drv_008', subjectId: 'driving', question: 'Yo\'lning o\'ng tomonidan o\'tish odatda?', options: ['Taqiqlanadi', 'Ruxsat (qoidalarga rioya)', 'Faqat kechasi', 'Faqat shahar tashqarisida'], correctAnswer: 1, explanation: 'O\'ngdan o\'tish — asosiy qoida', difficulty: 'easy', topic: 'Qoidalar' },
  { id: 'drv_009', subjectId: 'driving', question: 'Signal (burilish) qachon beriladi?', options: ['Burilgandan keyin', 'Burilishdan oldin', 'Hech qachon', 'Faqat tunda'], correctAnswer: 1, explanation: 'Oldindan signal berish shart', difficulty: 'easy', topic: 'Qoidalar' },
  { id: 'drv_010', subjectId: 'driving', question: 'Piyoda yo\'lakda haydash?', options: ['Ruxsat', 'Taqiqlanadi', 'Faqat sekin', 'Faqat velosiped'], correctAnswer: 1, explanation: 'Piyoda yo\'lakda transport taqiqlanadi', difficulty: 'easy', topic: 'Qoidalar' },

  { id: 'ielts_003', subjectId: 'ielts', question: 'IELTS Writing Task 2 da taxminan nechta so\'z yozish tavsiya etiladi?', options: ['100', '150', '250', '400'], correctAnswer: 2, explanation: 'Kamida 250 so\'z', difficulty: 'medium', topic: 'Writing' },
  { id: 'ielts_004', subjectId: 'ielts', question: 'IELTS Speaking nechta part dan iborat?', options: ['2', '3', '4', '5'], correctAnswer: 1, explanation: '3 part', difficulty: 'easy', topic: 'Speaking' },
  { id: 'ielts_005', subjectId: 'ielts', question: 'Band 9 nima anglatadi?', options: ['O\'rtacha', 'Yaxshi', 'Expert / mukammal', 'Boshlang\'ich'], correctAnswer: 2, explanation: 'Expert user', difficulty: 'easy', topic: 'Vocabulary' },

  { id: 'gram_003', subjectId: 'grammar', question: 'Past Perfect ishlatiladi:', options: ['Hozirgi odat', 'O\'tgan zamondan oldingi harakat', 'Kelajak', 'Buyruq'], correctAnswer: 1, explanation: 'had + V3', difficulty: 'medium', topic: 'Tenses' },
  { id: 'gram_004', subjectId: 'grammar', question: 'Article "the" ishlatiladi:', options: ['Har doim', 'Aniq / ma\'lum narsa', 'Hech qachon', 'Faqat ko\'plik'], correctAnswer: 1, explanation: 'Definite article', difficulty: 'easy', topic: 'Articles' },
  { id: 'gram_005', subjectId: 'grammar', question: 'Third conditional: If I had studied, I _____ passed.', options: ['will', 'would', 'would have', 'pass'], correctAnswer: 2, explanation: 'would have + V3', difficulty: 'hard', topic: 'Conditionals' }
];

// Helper functions
export function getQuestionsBySubject(subjectId, limit = null, shuffle = true) {
  let filtered = questions.filter(q => q.subjectId === subjectId);
  if (shuffle) {
    filtered = [...filtered].sort(() => Math.random() - 0.5);
  }
  if (limit) {
    filtered = filtered.slice(0, limit);
  }
  return filtered;
}

export function getQuestionById(id) {
  return questions.find(q => q.id === id);
}

export function getRandomQuestions(count = 10, subjectId = null) {
  let pool = subjectId ? questions.filter(q => q.subjectId === subjectId) : [...questions];
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getQuestionsByDifficulty(difficulty, limit = 10) {
  return questions.filter(q => q.difficulty === difficulty)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
}