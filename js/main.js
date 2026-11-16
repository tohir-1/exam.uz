// ExamUZ Main entry
import { getTheme, setTheme, getCurrentUser } from './storage.js';
import { toast } from './notifications.js';

// Init theme
function initTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      updateThemeIcon(next);
    });
    updateThemeIcon(theme);
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Light mode' : 'Dark mode');
  }
}

// Mobile menu
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
}

// Auth state in header
function updateAuthUI() {
  const user = getCurrentUser();
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const profileLink = document.getElementById('profile-link');
  const userName = document.getElementById('user-name');

  if (user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';
    if (profileLink) {
      profileLink.style.display = 'inline-flex';
      if (userName) userName.textContent = user.name?.split(' ')[0] || 'Profil';
    }
  } else {
    if (loginBtn) loginBtn.style.display = '';
    if (registerBtn) registerBtn.style.display = '';
    if (profileLink) profileLink.style.display = 'none';
  }
}

// Active nav link
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Scroll reveal
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  updateAuthUI();
  setActiveNav();
  initScrollReveal();
});

// Export for other modules
export { updateAuthUI, toast };