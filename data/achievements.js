export const achievementsList = [
  {
    id: 'first_test',
    name: 'First Test',
    description: 'Birinchi testingizni yakunlang',
    icon: 'rocket',
    xp: 50,
    condition: { type: 'tests_completed', value: 1 }
  },
  {
    id: 'perfect_score',
    name: 'Perfect Score',
    description: '100% natija bilan testni yakunlang',
    icon: 'trophy',
    xp: 100,
    condition: { type: 'perfect_score', value: 1 }
  },
  {
    id: 'tests_10',
    name: '10 Tests',
    description: '10 ta test ishlash',
    icon: 'target',
    xp: 150,
    condition: { type: 'tests_completed', value: 10 }
  },
  {
    id: 'tests_50',
    name: '50 Tests',
    description: '50 ta test ishlash',
    icon: 'medal',
    xp: 500,
    condition: { type: 'tests_completed', value: 50 }
  },
  {
    id: 'streak_7',
    name: '7 Day Streak',
    description: '7 kun ketma-ket kirish',
    icon: 'flame',
    xp: 200,
    condition: { type: 'streak', value: 7 }
  },
  {
    id: 'math_master',
    name: 'Math Master',
    description: 'Matematika fanidan 5 ta testni muvaffaqiyatli yakunlang',
    icon: 'calculator',
    xp: 250,
    condition: { type: 'subject_master', subject: 'math', value: 5 }
  },
  {
    id: 'english_master',
    name: 'English Master',
    description: 'Ingliz tili fanidan 5 ta testni muvaffaqiyatli yakunlang',
    icon: 'languages',
    xp: 250,
    condition: { type: 'subject_master', subject: 'english', value: 5 }
  },
  {
    id: 'daily_warrior',
    name: 'Daily Warrior',
    description: '5 kunlik challenge ni yakunlang',
    icon: 'calendar-check',
    xp: 180,
    condition: { type: 'daily_challenges', value: 5 }
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Testni vaqtdan oldin 90%+ bilan yakunlang',
    icon: 'zap',
    xp: 120,
    condition: { type: 'fast_perfect', value: 1 }
  },
  {
    id: 'mistake_fixer',
    name: 'Mistake Fixer',
    description: '10 ta xato savolni qayta ishlab to\'g\'ri javob bering',
    icon: 'wrench',
    xp: 150,
    condition: { type: 'mistakes_fixed', value: 10 }
  }
];

export function getAchievementById(id) {
  return achievementsList.find(a => a.id === id);
}