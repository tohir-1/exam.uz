// Authentication - Demo mode + Firebase ready
import { storage, setCurrentUser, getCurrentUser, logoutUser, getUserStats, updateUserStats } from './storage.js';
import { toast } from './notifications.js';
import { generateId } from './utils.js';

// Demo users store
function getUsers() {
  return storage.get('users', []);
}

function saveUsers(users) {
  storage.set('users', users);
}

export function register(name, email, password) {
  if (!name || !email || !password) {
    toast.error('Barcha maydonlarni to\'ldiring');
    return { success: false };
  }
  if (password.length < 6) {
    toast.error('Parol kamida 6 belgidan iborat bo\'lishi kerak');
    return { success: false };
  }

  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    toast.error('Bu email allaqachon ro\'yxatdan o\'tgan');
    return { success: false };
  }

  const user = {
    id: generateId('user'),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    // In real app never store plain password. Demo only - use simple hash simulation
    passwordHash: btoa(password + '_examuz_salt'),
    createdAt: new Date().toISOString(),
    role: 'user',
    avatar: null,
    xp: 0,
    level: 1
  };

  users.push(user);
  saveUsers(users);

  // Auto login
  const { passwordHash, ...safeUser } = user;
  setCurrentUser(safeUser);
  updateUserStats({ lastActiveDate: new Date().toISOString().slice(0, 10) });
  toast.success('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
  return { success: true, user: safeUser };
}

export function login(email, password) {
  if (!email || !password) {
    toast.error('Email va parolni kiriting');
    return { success: false };
  }

  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user || user.passwordHash !== btoa(password + '_examuz_salt')) {
    toast.error('Email yoki parol noto\'g\'ri');
    return { success: false };
  }

  const { passwordHash, ...safeUser } = user;
  setCurrentUser(safeUser);
  // Streak logic
  const stats = getUserStats();
  const today = new Date().toISOString().slice(0, 10);
  let streak = stats.streak || 0;
  if (stats.lastActiveDate) {
    const last = new Date(stats.lastActiveDate);
    const diff = Math.floor((new Date(today) - last) / (1000 * 60 * 60 * 24));
    if (diff === 1) streak += 1;
    else if (diff > 1) streak = 1;
  } else {
    streak = 1;
  }
  updateUserStats({ lastActiveDate: today, streak });
  toast.success(`Xush kelibsiz, ${safeUser.name}!`);
  return { success: true, user: safeUser };
}

export function logout() {
  logoutUser();
  toast.info('Tizimdan chiqdingiz');
  window.location.href = 'index.html';
}

export function isLoggedIn() {
  return !!getCurrentUser();
}

export function requireAuth(redirect = 'login.html') {
  if (!isLoggedIn()) {
    toast.warning('Avval tizimga kiring');
    window.location.href = redirect;
    return false;
  }
  return true;
}

export function getDemoUser() {
  // Create or get a demo user for quick testing
  let user = getCurrentUser();
  if (!user) {
    user = {
      id: 'demo_user',
      name: 'Demo Foydalanuvchi',
      email: 'demo@examuz.uz',
      createdAt: new Date().toISOString(),
      role: 'user',
      avatar: null,
      xp: 120,
      level: 2
    };
    setCurrentUser(user);
  }
  return user;
}

// Firebase placeholder (ready for integration)
export const firebaseAuth = {
  enabled: false,
  // When Firebase is configured, these methods will be used
  async signUp(email, password, name) {
    // await createUserWithEmailAndPassword(...)
    return register(name, email, password);
  },
  async signIn(email, password) {
    return login(email, password);
  },
  async signOut() {
    logout();
  }
};