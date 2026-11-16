import { getTheme, setTheme, storage, getTestResults, getCurrentUser } from './storage.js';
import { subjects } from '../data/subjects.js';
import { exams } from '../data/exams.js';
import { questions as staticQuestions } from '../data/questions.js';
import { toast } from './notifications.js';
import { generateId, formatDate } from './utils.js';

const ADMIN_USER = 'tohir';
const ADMIN_PASS = '5678';
const ADMIN_SESSION_KEY = 'examuz_admin_session';

document.documentElement.setAttribute('data-theme', getTheme());
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    setTheme(next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

function isAdminLoggedIn() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === '1';
}

function showApp() {
  document.getElementById('admin-login').style.display = 'none';
  document.getElementById('admin-app').style.display = 'block';
  loadDashboard();
}

function showLogin() {
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-app').style.display = 'none';
}

if (isAdminLoggedIn()) showApp();
else showLogin();

document.getElementById('admin-login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('admin-user').value.trim().toLowerCase();
  const pass = document.getElementById('admin-pass').value;
  const err = document.getElementById('admin-login-error');
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
    err.style.display = 'none';
    toast.success('Admin panelga xush kelibsiz!');
    showApp();
  } else {
    err.textContent = 'Login yoki parol noto‘g‘ri';
    err.style.display = 'block';
    toast.error('Noto‘g‘ri login yoki parol');
  }
});

document.getElementById('admin-logout').addEventListener('click', () => {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  toast.info('Chiqdingiz');
  showLogin();
});

document.querySelectorAll('#admin-nav .nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#admin-nav .nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
    document.getElementById('tab-' + btn.dataset.tab).style.display = 'block';
    if (btn.dataset.tab === 'dashboard') loadDashboard();
    if (btn.dataset.tab === 'users') loadUsers();
    if (btn.dataset.tab === 'questions') loadQuestions();
    if (btn.dataset.tab === 'exams') loadExams();
    if (btn.dataset.tab === 'results') loadResults();
  });
});

function getUsers() { return storage.get('users', []); }
function getCustomQuestions() { return storage.get('customQuestions', []); }
function saveCustomQuestions(list) { storage.set('customQuestions', list); }
function getAllQuestions() { return [...staticQuestions, ...getCustomQuestions()]; }

function getUserActivityMap() {
  const results = getTestResults();
  const map = {};
  results.forEach(r => {
    const uid = r.userId || 'guest';
    const t = new Date(r.date).getTime();
    if (!map[uid] || t > map[uid]) map[uid] = t;
  });
  return map;
}

function isActiveRecently(ts, minutes = 15) {
  if (!ts) return false;
  return (Date.now() - ts) < minutes * 60 * 1000;
}

function heartbeat() {
  const user = getCurrentUser();
  const online = storage.get('onlineUsers', {});
  let gid = localStorage.getItem('examuz_guest_id');
  if (!gid) { gid = generateId('g'); localStorage.setItem('examuz_guest_id', gid); }
  const id = user?.id || gid;
  online[id] = { id, name: user?.name || 'Mehmon', email: user?.email || '—', lastSeen: Date.now() };
  Object.keys(online).forEach(k => {
    if (Date.now() - online[k].lastSeen > 30 * 60 * 1000) delete online[k];
  });
  storage.set('onlineUsers', online);
}
heartbeat();
setInterval(heartbeat, 60000);

function loadDashboard() {
  const users = getUsers();
  const results = getTestResults();
  const allQ = getAllQuestions();
  const online = storage.get('onlineUsers', {});
  const onlineList = Object.values(online).filter(u => isActiveRecently(u.lastSeen, 15));
  const activity = getUserActivityMap();
  const inactive = users.filter(u => !activity[u.id]);
  const activeUserIds = new Set(results.map(r => r.userId).filter(Boolean));

  document.getElementById('admin-stats').innerHTML = `
    <div class="card stat-card"><div class="stat-value">${users.length}</div><div class="stat-label">Ro‘yxatdan o‘tgan</div></div>
    <div class="card stat-card"><div class="stat-value">${onlineList.length}</div><div class="stat-label">Jonli (15 daq)</div></div>
    <div class="card stat-card"><div class="stat-value">${activeUserIds.size}</div><div class="stat-label">Test ishlagan</div></div>
    <div class="card stat-card"><div class="stat-value">${inactive.length}</div><div class="stat-label">Umuman foydalanmagan</div></div>
    <div class="card stat-card"><div class="stat-value">${allQ.length}</div><div class="stat-label">Savollar</div></div>
    <div class="card stat-card"><div class="stat-value">${exams.length}</div><div class="stat-label">Imtihonlar</div></div>
    <div class="card stat-card"><div class="stat-value">${results.length}</div><div class="stat-label">Jami natijalar</div></div>
    <div class="card stat-card"><div class="stat-value">${results.filter(r => r.percentage === 100).length}</div><div class="stat-label">100% natijalar</div></div>
  `;

  const activeEl = document.getElementById('active-users-list');
  activeEl.innerHTML = onlineList.length
    ? onlineList.map(u => `<div class="user-row"><span class="online-dot"></span><strong>${u.name}</strong> <span class="text-muted">${u.email}</span></div>`).join('')
    : '<p class="text-muted">Hozircha jonli foydalanuvchi yo‘q</p>';

  const inactiveEl = document.getElementById('inactive-users-list');
  inactiveEl.innerHTML = inactive.length
    ? inactive.map(u => `<div class="user-row"><strong>${u.name}</strong> <span class="text-muted">${u.email}</span> <span class="badge badge-hard">Faol emas</span></div>`).join('')
    : '<p class="text-muted">Barcha foydalanuvchilar kamida bitta test ishlagan yoki hali hech kim yo‘q</p>';
}

function loadUsers() {
  const users = getUsers();
  const activity = getUserActivityMap();
  const results = getTestResults();
  const tbody = document.querySelector('#users-table tbody');
  if (!users.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-muted">Hali ro‘yxatdan o‘tgan foydalanuvchi yo‘q</td></tr>';
    return;
  }
  tbody.innerHTML = users.map((u, i) => {
    const tests = results.filter(r => r.userId === u.id).length;
    const last = activity[u.id];
    const status = last
      ? (isActiveRecently(last, 15) ? '<span class="badge badge-easy">Jonli</span>' : '<span class="badge badge-medium">Faol</span>')
      : '<span class="badge badge-hard">Foydalanmagan</span>';
    return `<tr>
      <td>${i + 1}</td><td>${u.name}</td><td>${u.email}</td><td>${tests}</td>
      <td>${u.createdAt ? formatDate(u.createdAt) : '—'}</td>
      <td>${last ? formatDate(new Date(last)) : '—'}</td><td>${status}</td>
    </tr>`;
  }).join('');
}

function loadQuestions() {
  const all = getAllQuestions();
  document.getElementById('q-count').textContent = all.length;
  const sel = document.getElementById('q-subject');
  sel.innerHTML = subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  const custom = getCustomQuestions();
  const list = document.getElementById('questions-admin-list');
  list.innerHTML = `
    <p class="text-muted mb-2">Statik: ${staticQuestions.length} | Admin qo‘shgan: ${custom.length}</p>
    ${custom.slice().reverse().map(q => `
      <div class="admin-q-item">
        <div><strong>${q.question}</strong></div>
        <div class="text-muted">${q.subjectId} · ${q.difficulty} · To‘g‘ri: ${String.fromCharCode(65 + q.correctAnswer)}</div>
        <button type="button" class="btn btn-sm btn-danger" data-del="${q.id}">O‘chirish</button>
      </div>
    `).join('') || '<p class="text-muted">Hali admin qo‘shgan savol yo‘q</p>'}
  `;
  list.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      saveCustomQuestions(getCustomQuestions().filter(q => q.id !== btn.dataset.del));
      toast.success('O‘chirildi');
      loadQuestions();
    });
  });
}

document.getElementById('add-question-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const q = {
    id: generateId('cq'),
    subjectId: document.getElementById('q-subject').value,
    question: document.getElementById('q-text').value.trim(),
    options: [
      document.getElementById('q-a').value.trim(),
      document.getElementById('q-b').value.trim(),
      document.getElementById('q-c').value.trim(),
      document.getElementById('q-d').value.trim()
    ],
    correctAnswer: parseInt(document.getElementById('q-correct').value, 10),
    explanation: document.getElementById('q-explanation').value.trim(),
    difficulty: document.getElementById('q-difficulty').value,
    topic: document.getElementById('q-topic').value.trim() || 'General',
    custom: true
  };
  const list = getCustomQuestions();
  list.push(q);
  saveCustomQuestions(list);
  toast.success('Savol qo‘shildi!');
  e.target.reset();
  loadQuestions();
  loadDashboard();
});

function loadExams() {
  document.getElementById('exams-admin-list').innerHTML = exams.map(e => `
    <div class="exam-admin-row">
      <strong>${e.title}</strong>
      <span class="text-muted">${e.subjectId || 'aralash'} · ${e.questionsCount} savol · ${e.duration} daq · ${e.difficulty}</span>
    </div>
  `).join('');
}

function loadResults() {
  const results = getTestResults();
  const users = getUsers();
  const nameOf = (id) => users.find(u => u.id === id)?.name || id || 'Mehmon';
  const tbody = document.querySelector('#results-table tbody');
  if (!results.length) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-muted">Hali natija yo‘q</td></tr>';
    return;
  }
  tbody.innerHTML = results.slice(0, 100).map(r => `
    <tr>
      <td>${formatDate(r.date)}</td>
      <td>${nameOf(r.userId)}</td>
      <td><strong>${r.percentage}%</strong></td>
      <td>${r.correct}/${r.total}</td>
      <td>${r.score}</td>
      <td>${r.mode || '—'}</td>
    </tr>
  `).join('');
}