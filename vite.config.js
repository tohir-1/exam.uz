import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        exams: resolve(__dirname, 'exams.html'),
        subjects: resolve(__dirname, 'subjects.html'),
        test: resolve(__dirname, 'test.html'),
        results: resolve(__dirname, 'results.html'),
        leaderboard: resolve(__dirname, 'leaderboard.html'),
        mistakes: resolve(__dirname, 'mistakes.html'),
        profile: resolve(__dirname, 'profile.html'),
        planner: resolve(__dirname, 'planner.html'),
        achievements: resolve(__dirname, 'achievements.html'),
        login: resolve(__dirname, 'login.html'),
        register: resolve(__dirname, 'register.html'),
        about: resolve(__dirname, 'about.html'),
        admin: resolve(__dirname, 'admin.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});