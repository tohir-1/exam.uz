# ExamUZ — Professional Online Examination Platform

**Slogan:** Bilimingni sinab ko‘r, kelajagingni yarat!

Zamonaviy, to‘liq ishlaydigan online imtihon platformasi. Demo rejimda (Firebase sozlanmagan) localStorage asosida ishlaydi.

## Texnologiyalar

- HTML5, CSS3, Vanilla JS (ES modules)
- Vite
- Chart.js (CDN or npm)
- Firebase ready (Auth + Firestore)
- LocalStorage demo mode

## O‘rnatish

```bash
cd EXAMUZ
npm install
npm run dev
```

Brauzerda: http://localhost:3000

## Production

```bash
npm run build
npm run preview
```

## Demo rejim

Firebase sozlanmagan bo‘lsa:

1. Ro‘yxatdan o‘ting yoki "Demo rejimda kirish" tugmasini bosing
2. Imtihonlar → Test boshlash
3. Natijalar, xatolar, reyting — hammasi localStorage da saqlanadi

## Asosiy funksiyalar

- Test engine (practice / exam / challenge)
- Timer, progress, savollar orasida yurish, belgilash
- Natijalar hisoblash va grafik
- Xatolar saqlash
- Reyting (demo + foydalanuvchi ballari)
- Profil, XP, streak
- Dark / Light mode
- Responsive

## Firebase sozlash (ixtiyoriy)

1. Firebase console da loyiha yarating
2. `js/firebase.js` ga config qo‘shing
3. Authentication (Email/Password) yoqing
4. Firestore rules ni `firestore.rules` dan oling

## Struktura

```
EXAMUZ/
├── index.html, exams.html, test.html, results.html, ...
├── css/
├── js/          (modular)
├── data/        (questions, subjects, exams, achievements)
├── package.json
└── vite.config.js
```

## Deployment

- **Netlify**: `npm run build` → `dist` papkasini deploy
- **Firebase Hosting**: `firebase init hosting` → `firebase deploy`

## Eslatma

Namuna savollar o‘quv maqsadida. Rasmiy imtihon savollari emas.

© 2026 ExamUZ
