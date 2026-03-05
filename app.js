const STORAGE_KEY = "lynn_kids_garden_reports";
const SOUND_PREF_KEY = "lynn_kids_garden_sound";

/*
 * Question Bank
 * type: "mcq"       — multiple choice (default)
 * type: "listening" — simulated listening; shows audio play button then transcript
 * type: "writing"   — open text entry; accepts any non-empty answer
 * cefr: CEFR band tag
 * skill: displayed skill tag
 */
const questionBank = [
  /* ── Easy (1-6) ──────────────────────────────────── */
  {
    id: 1,
    level: "Easy",
    type: "mcq",
    cefr: "Pre-A1",
    skill: "Grammar",
    story: "🌱 Lynn finds a tiny seed. Help her choose the right word.",
    prompt: "I ___ eight years old.",
    options: ["am", "is", "are", "be"],
    answer: "am",
    explain: "Use 'am' with 'I'. 主语I用am。"
  },
  {
    id: 2,
    level: "Easy",
    type: "listening",
    cefr: "Pre-A1",
    skill: "Listening",
    story: "🔊 Listen carefully and choose the right picture. 仔细听，选择正确的答案。",
    transcript: "\"Hello! My name is Tom. I have a cat. The cat is orange.\"",
    prompt: "What colour is Tom's cat? 汤姆的猫是什么颜色？",
    options: ["Orange 橙色", "Black 黑色", "White 白色", "Brown 棕色"],
    answer: "Orange 橙色",
    explain: "Tom said his cat is orange. 汤姆说他的猫是橙色的。"
  },
  {
    id: 3,
    level: "Easy",
    type: "mcq",
    cefr: "A1",
    skill: "Grammar",
    story: "🌼 Lynn waters flowers every day.",
    prompt: "She ___ to school at 8 o'clock.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes",
    explain: "For 'she/he', add -s to the verb. 第三人称单数动词加s。"
  },
  {
    id: 4,
    level: "Easy",
    type: "mcq",
    cefr: "A1",
    skill: "Vocabulary",
    story: "🧺 We pack a picnic basket.",
    prompt: "There are three ___ in the basket.",
    options: ["sandwich", "sandwiches", "sandwichs", "sandwiche"],
    answer: "sandwiches",
    explain: "The plural of sandwich is sandwiches. sandwich的复数是sandwiches。"
  },
  {
    id: 5,
    level: "Easy",
    type: "mcq",
    cefr: "A1",
    skill: "Vocabulary",
    story: "🐰 A rabbit hides behind a tree.",
    prompt: "The rabbit is ___ the tree.",
    options: ["on", "under", "behind", "between"],
    answer: "behind",
    explain: "Behind = at the back of. Behind = 在……后面。"
  },
  {
    id: 6,
    level: "Easy",
    type: "mcq",
    cefr: "Pre-A1",
    skill: "Vocabulary",
    story: "☀️ Good morning in the garden!",
    prompt: "What time greeting is correct for the morning?",
    options: ["Good night", "Good evening", "Good morning", "Goodbye"],
    answer: "Good morning",
    explain: "We say 'Good morning' in the morning. 早上说Good morning。"
  },
  /* ── Medium (7-12) ───────────────────────────────── */
  {
    id: 7,
    level: "Medium",
    type: "mcq",
    cefr: "A1",
    skill: "Grammar",
    story: "🌳 Lynn reaches the forest gate.",
    prompt: "I have got ___ new backpack.",
    options: ["a", "an", "the", "-"],
    answer: "a",
    explain: "Use 'a' before consonant sounds like 'new'. 辅音前用a。"
  },
  {
    id: 8,
    level: "Medium",
    type: "listening",
    cefr: "A1",
    skill: "Listening",
    story: "🔊 Listen and choose the correct answer. 听一听，选出正确答案。",
    transcript: "\"Yesterday afternoon, Ben and his friends played football in the park. It was sunny and fun!\"",
    prompt: "What did Ben do yesterday afternoon? 本昨天下午做了什么？",
    options: ["Played basketball 打篮球", "Played football 踢足球", "Swam 游泳", "Read books 看书"],
    answer: "Played football 踢足球",
    explain: "Ben played football in the park. Ben在公园踢足球。"
  },
  {
    id: 9,
    level: "Medium",
    type: "mcq",
    cefr: "A1",
    skill: "Grammar",
    story: "🎒 Time for school bag check.",
    prompt: "Which sentence is correct? 哪句话是对的？",
    options: ["He don't like milk.", "He doesn't like milk.", "He not like milk.", "He doesn't likes milk."],
    answer: "He doesn't like milk.",
    explain: "After doesn't, use base verb: like. doesn't后用动词原形。"
  },
  {
    id: 10,
    level: "Medium",
    type: "mcq",
    cefr: "A1",
    skill: "Grammar",
    story: "🚲 Lynn races to the bridge.",
    prompt: "My bike is ___ than your bike.",
    options: ["fast", "faster", "fastest", "more fast"],
    answer: "faster",
    explain: "Comparative of fast is faster. fast的比较级是faster。"
  },
  {
    id: 11,
    level: "Medium",
    type: "mcq",
    cefr: "A1",
    skill: "Grammar",
    story: "🍓 Pick fruit for lunch.",
    prompt: "How ___ strawberries do you want?",
    options: ["many", "much", "any", "few"],
    answer: "many",
    explain: "Use 'many' with countable plural nouns. 可数名词用many。"
  },
  {
    id: 12,
    level: "Medium",
    type: "mcq",
    cefr: "A1",
    skill: "Reading",
    story: "📚 Read and choose. Lynn reads her timetable.",
    prompt: "We ___ English on Mondays.",
    options: ["have", "has", "having", "had"],
    answer: "have",
    explain: "With 'we', use 'have'. we后用have。"
  },
  /* ── Hard (13-18) ────────────────────────────────── */
  {
    id: 13,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Grammar",
    story: "🏰 Final castle challenge begins.",
    prompt: "If it ___ tomorrow, we will stay at home.",
    options: ["rain", "rains", "raining", "rained"],
    answer: "rains",
    explain: "First conditional uses present simple. 真实条件句用一般现在时。"
  },
  {
    id: 14,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Grammar",
    story: "🗝️ Lynn needs the grammar key.",
    prompt: "Choose the correct sentence. 选出正确的句子。",
    options: ["She has never been to London.", "She never has been to London.", "She has been never to London.", "Never she has been to London."],
    answer: "She has never been to London.",
    explain: "Adverb placement: has never been. 副词放在助动词后。"
  },
  {
    id: 15,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Grammar",
    story: "🧩 Build the sentence bridge.",
    prompt: "I enjoy ___ books in the evening.",
    options: ["read", "to read", "reading", "reads"],
    answer: "reading",
    explain: "Enjoy is followed by verb + -ing. enjoy后跟动词-ing形式。"
  },
  {
    id: 16,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Grammar",
    story: "🌟 One more clue from the stars.",
    prompt: "By the time we arrived, the film ___.",
    options: ["starts", "started", "had started", "has started"],
    answer: "had started",
    explain: "Past perfect for earlier past action. 过去完成时表示更早发生的动作。"
  },
  {
    id: 17,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Grammar",
    story: "🧠 Think like a language hero.",
    prompt: "This is the boy ___ won the spelling contest.",
    options: ["which", "who", "where", "whose"],
    answer: "who",
    explain: "Use 'who' for people. 指人用who。"
  },
  {
    id: 18,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Grammar",
    story: "👑 Last gate: choose the best answer.",
    prompt: "If I ___ more time, I would learn French.",
    options: ["have", "had", "will have", "am having"],
    answer: "had",
    explain: "Second conditional uses past simple in if-clause. 虚拟条件句用过去式。"
  },
  /* ── Bonus: Listening + Writing ────────────────── */
  {
    id: 19,
    level: "Hard",
    type: "listening",
    cefr: "A2",
    skill: "Listening",
    story: "🔊 Listen carefully. Each audio plays twice. 仔细听，音频播放两次。",
    transcript: "\"Hi! My name is Lucy. I go to school by bus every day. School starts at eight thirty in the morning. My favourite subject is Art.\"",
    prompt: "How does Lucy go to school? Lucy怎样去上学？",
    options: ["By car 坐汽车", "By bus 坐公交车", "On foot 走路", "By bike 骑自行车"],
    answer: "By bus 坐公交车",
    explain: "Lucy said she goes to school by bus. Lucy说她坐公交车上学。"
  },
  {
    id: 20,
    level: "Hard",
    type: "mcq",
    cefr: "A2",
    skill: "Reading",
    story: "📖 Read the sentence and answer. 读一读，回答问题。\n\"Tom usually wakes up at seven o'clock. He eats breakfast and then walks to school with his sister.\"",
    prompt: "Who walks to school with Tom? 谁和汤姆一起走路上学？",
    options: ["His brother 他哥哥", "His friend 他朋友", "His sister 他妹妹", "His mother 他妈妈"],
    answer: "His sister 他妹妹",
    explain: "The text says Tom walks with his sister. 文中说Tom和妹妹一起。"
  },
  {
    id: 21,
    level: "Hard",
    type: "writing",
    cefr: "A2",
    skill: "Writing",
    story: "✏️ Time to write! Try your best — you can do it! 加油，你可以的！",
    prompt: "Write 2 or 3 sentences about your favourite animal. 写2到3句话，描述你最喜欢的动物。",
    topicHints: ["animal", "name", "colour", "size", "food"],
    minWords: 5,
    answer: "__writing__",
    explain: "Great writing practice! 写作练习完成！"
  }
];

const setupCard = document.getElementById("setupCard");
const quizCard = document.getElementById("quizCard");
const summaryCard = document.getElementById("summaryCard");
const historyBody = document.getElementById("historyBody");
const levelBanner = document.getElementById("levelBanner");
const loadingOverlay = document.getElementById("loadingOverlay");

const livesValue = document.getElementById("livesValue");
const starsValue = document.getElementById("starsValue");
const streakValue = document.getElementById("streakValue");
const timerValue = document.getElementById("timerValue");
const progressPct = document.getElementById("progressPct");

const studentNameInput = document.getElementById("studentName");
const studentClassInput = document.getElementById("studentClass");
const timedModeToggle = document.getElementById("timedModeToggle");
const soundToggle = document.getElementById("soundToggle");
const setupError = document.getElementById("setupError");

const levelBadge = document.getElementById("levelBadge");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const storyCue = document.getElementById("storyCue");
const questionText = document.getElementById("questionText");
const optionsWrap = document.getElementById("optionsWrap");
const feedbackText = document.getElementById("feedbackText");
const nextBtn = document.getElementById("nextBtn");
const zoomBtn = document.getElementById("zoomBtn");

// Listening section
const listeningSection = document.getElementById("listeningSection");
const playAudioBtn = document.getElementById("playAudioBtn");
const pauseAudioBtn = document.getElementById("pauseAudioBtn");
const playStatus = document.getElementById("playStatus");
const transcriptReveal = document.getElementById("transcriptReveal");

// Writing section
const writingSection = document.getElementById("writingSection");
const topicTagsRow = document.getElementById("topicTagsRow");
const writingInput = document.getElementById("writingInput");
const wordCountDisplay = document.getElementById("wordCountDisplay");
const writingCaseBtn = document.getElementById("writingCaseBtn");

const cefrTag = document.getElementById("cefrTag");
const skillTag = document.getElementById("skillTag");

const studentHeadline = document.getElementById("studentHeadline");
const totalScore = document.getElementById("totalScore");
const accuracyRate = document.getElementById("accuracyRate");
const proficiencyTag = document.getElementById("proficiencyTag");
const summaryAdvice = document.getElementById("summaryAdvice");
const gameStars = document.getElementById("gameStars");
const bestCombo = document.getElementById("bestCombo");
const vocabPredict = document.getElementById("vocabPredict");
const zpdTag = document.getElementById("zpdTag");
const badgeWallList = document.getElementById("badgeWallList");
const growthTrendList = document.getElementById("growthTrendList");
const feasibilityIntro = document.getElementById("feasibilityIntro");
const parentScaffold = document.getElementById("parentScaffold");
const teacherScaffold = document.getElementById("teacherScaffold");
const studentScaffold = document.getElementById("studentScaffold");

const teacherTotalStudents = document.getElementById("teacherTotalStudents");
const teacherAvgAccuracy = document.getElementById("teacherAvgAccuracy");
const teacherTopBand = document.getElementById("teacherTopBand");
const classSummaryList = document.getElementById("classSummaryList");
const weakPointsList = document.getElementById("weakPointsList");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const exportCurrentBtn = document.getElementById("exportCurrentBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const clearDataBtn = document.getElementById("clearDataBtn");
const clearDataMsg = document.getElementById("clearDataMsg");

const teacherLockBox = document.getElementById("teacherLockBox");
const teacherContent = document.getElementById("teacherContent");
const teacherPwd1 = document.getElementById("teacherPwd1");
const teacherPwd2 = document.getElementById("teacherPwd2");
const teacherUnlockBtn = document.getElementById("teacherUnlockBtn");
const teacherLockMsg = document.getElementById("teacherLockMsg");

const tabButtons = Array.from(document.querySelectorAll(".side-tab"));
const tabPanels = Array.from(document.querySelectorAll("[data-panel]"));

const wordGameProgress = document.getElementById("wordGameProgress");
const wordGameScore = document.getElementById("wordGameScore");
const wordGameStatus = document.getElementById("wordGameStatus");
const wordGamePrompt = document.getElementById("wordGamePrompt");
const wordGameInput = document.getElementById("wordGameInput");
const wordGameStartBtn = document.getElementById("wordGameStartBtn");
const wordGameCheckBtn = document.getElementById("wordGameCheckBtn");
const wordGameNextBtn = document.getElementById("wordGameNextBtn");
const wordGameFeedback = document.getElementById("wordGameFeedback");

let audioContext = null;
let teacherUnlocked = false;
let listeningState = { playCount: 0, playing: false, timerId: null };
let writingCaseLower = true;

const wordFillItems = [
  { sentence: "Lynn likes to ___ flowers in the garden.", answer: "water" },
  { sentence: "The rabbit is ___ the tree.", answer: "behind" },
  { sentence: "We ___ English on Mondays.", answer: "have" },
  { sentence: "My bike is ___ than yours.", answer: "faster" },
  { sentence: "She has never been to ___.", answer: "london" }
];

let wordGame = {
  index: 0,
  score: 0,
  started: false,
  checked: false
};

function switchTab(panelName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tabTarget === panelName);
  });

  tabPanels.forEach((panel) => {
    const belongs = panel.dataset.panel === panelName;
    panel.classList.toggle("tab-hidden", !belongs);
  });
}

function unlockTeacherPage() {
  const pass1 = teacherPwd1.value.trim();
  const pass2 = teacherPwd2.value.trim();
  if (pass1 === "8888" && pass2 === "8888") {
    teacherUnlocked = true;
    teacherLockMsg.textContent = "Unlocked. Welcome, teacher!";
    teacherLockBox.classList.add("hidden");
    teacherContent.classList.remove("hidden");
    renderTeacherOverview();
    return;
  }

  teacherUnlocked = false;
  teacherLockMsg.textContent = "Wrong password. Both password fields must be 8888.";
}

function ensureTeacherLock() {
  if (teacherUnlocked) {
    teacherLockBox.classList.add("hidden");
    teacherContent.classList.remove("hidden");
    return;
  }

  teacherLockBox.classList.remove("hidden");
  teacherContent.classList.add("hidden");
}

function renderWordGameQuestion() {
  const total = wordFillItems.length;
  const item = wordFillItems[wordGame.index];
  wordGameProgress.textContent = `${wordGame.index + 1} / ${total}`;
  wordGameScore.textContent = String(wordGame.score);
  wordGamePrompt.textContent = item.sentence.replace("___", "_____ ");
  wordGameStatus.textContent = "Playing";
  wordGameFeedback.textContent = "";
  wordGameInput.value = "";
  wordGameInput.focus();
  wordGame.checked = false;
}

function startWordGame() {
  wordGame = {
    index: 0,
    score: 0,
    started: true,
    checked: false
  };
  renderWordGameQuestion();
}

function checkWordGameAnswer() {
  if (!wordGame.started || wordGame.checked) {
    return;
  }

  const item = wordFillItems[wordGame.index];
  const input = wordGameInput.value.trim().toLowerCase();
  const correct = item.answer.toLowerCase();

  if (input === correct) {
    wordGame.score += 1;
    wordGameFeedback.textContent = "✅ Correct spelling!";
  } else {
    wordGameFeedback.textContent = `❌ Correct answer: ${item.answer}`;
  }

  wordGameScore.textContent = String(wordGame.score);
  wordGame.checked = true;
}

function nextWordGameQuestion() {
  if (!wordGame.started) {
    return;
  }

  if (!wordGame.checked) {
    wordGameFeedback.textContent = "Please check this answer first.";
    return;
  }

  wordGame.index += 1;
  if (wordGame.index >= wordFillItems.length) {
    wordGameStatus.textContent = "Finished";
    wordGamePrompt.textContent = "Great job! You finished the word game.";
    wordGameFeedback.textContent = `Final score: ${wordGame.score} / ${wordFillItems.length}`;
    wordGameProgress.textContent = `${wordFillItems.length} / ${wordFillItems.length}`;
    wordGame.started = false;
    return;
  }

  renderWordGameQuestion();
}

let state = {
  studentName: "",
  studentClass: "",
  index: 0,
  answers: [],
  correct: 0,
  lives: 3,
  stars: 0,
  streak: 0,
  bestStreak: 0,
  timedMode: false,
  timerId: null,
  timeLeft: 20,
  questionLocked: false,
  timeouts: 0,
  startedAt: null,
  finishedReport: null
};

function renderHud() {
  livesValue.textContent = `❤️ ${state.lives}`;
  starsValue.textContent = `⭐ ${state.stars}`;
  streakValue.textContent = `🔥 x${state.streak}`;
  timerValue.textContent = state.timedMode ? `⏱ ${state.timeLeft}s` : "⏱ --";
  timerValue.classList.toggle("urgent", state.timedMode && state.timeLeft <= 5);
}

function loadSoundPreference() {
  try {
    return localStorage.getItem(SOUND_PREF_KEY) === "on";
  } catch (error) {
    return false;
  }
}

function saveSoundPreference(enabled) {
  try {
    localStorage.setItem(SOUND_PREF_KEY, enabled ? "on" : "off");
  } catch (error) {
    return;
  }
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new window.AudioContext();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playTone(frequency, durationMs, type = "sine", volume = 0.03) {
  if (!soundToggle.checked) {
    return;
  }

  ensureAudioContext();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(now);
  oscillator.stop(now + durationMs / 1000);
}

function playCountdownSound(timeLeft) {
  if (timeLeft <= 3) {
    playTone(780, 110, "square", 0.04);
    return;
  }
  playTone(520, 90, "square", 0.03);
}

function playVictorySound() {
  if (!soundToggle.checked) {
    return;
  }

  playTone(523, 110, "triangle", 0.04);
  setTimeout(() => playTone(659, 110, "triangle", 0.04), 120);
  setTimeout(() => playTone(784, 160, "triangle", 0.04), 240);
}

function clearQuestionTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startQuestionTimer() {
  clearQuestionTimer();
  if (!state.timedMode) {
    return;
  }

  state.timeLeft = 20;
  renderHud();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    renderHud();
    if (state.timeLeft > 0 && state.timeLeft <= 5) {
      playCountdownSound(state.timeLeft);
    }
    if (state.timeLeft <= 0) {
      clearQuestionTimer();
      handleTimeout();
    }
  }, 1000);
}

function applyWrongImpact() {
  state.streak = 0;
  state.lives = Math.max(0, state.lives - 1);
  if (state.lives === 0) {
    state.lives = 1;
    return "🛟 Magic heart! Keep going — you can do it! 加油，继续！";
  }
  return "";
}

function handleTimeout() {
  if (state.questionLocked) {
    return;
  }

  const q = questionBank[state.index];
  const buttons = Array.from(optionsWrap.querySelectorAll("button"));
  state.questionLocked = true;
  state.timeouts += 1;

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === q.answer) {
      btn.classList.add("correct");
    }
  });

  const magicHeartText = applyWrongImpact();
  renderHud();

  state.answers.push({
    id: q.id,
    level: q.level,
    skill: q.skill || "Grammar",
    prompt: q.prompt,
    selected: "(timeout)",
    answer: q.answer,
    correct: false,
    starsEarned: 0,
    streakAfter: state.streak,
    timeout: true
  });

  feedbackText.textContent = magicHeartText || `⏰ Time's up! ${q.explain} — Don't worry, try the next one! 别担心，继续加油！`;
  nextBtn.classList.remove("hidden");
}

function renderTeacherOverview() {
  const reports = loadReports();

  if (!reports.length) {
    teacherTotalStudents.textContent = "0";
    teacherAvgAccuracy.textContent = "0%";
    teacherTopBand.textContent = "-";
    classSummaryList.innerHTML = "<li>No class data yet.</li>";
    weakPointsList.innerHTML = "<li>No weak points yet.</li>";
    return;
  }

  teacherTotalStudents.textContent = String(reports.length);
  const avgAccuracy = Math.round(reports.reduce((sum, item) => sum + Number(item.accuracy || 0), 0) / reports.length);
  teacherAvgAccuracy.textContent = `${avgAccuracy}%`;

  const proficiencyMap = {};
  reports.forEach((report) => {
    const key = report.proficiency || "Unknown";
    proficiencyMap[key] = (proficiencyMap[key] || 0) + 1;
  });

  const topProficiency = Object.entries(proficiencyMap).sort((a, b) => b[1] - a[1])[0];
  teacherTopBand.textContent = topProficiency ? `${topProficiency[0]} (${topProficiency[1]})` : "-";

  const classMap = {};
  reports.forEach((report) => {
    const cls = report.studentClass?.trim() || "Unassigned";
    if (!classMap[cls]) {
      classMap[cls] = { total: 0, accuracy: 0 };
    }
    classMap[cls].total += 1;
    classMap[cls].accuracy += Number(report.accuracy || 0);
  });

  const classItems = Object.entries(classMap)
    .map(([cls, data]) => ({
      cls,
      count: data.total,
      avg: Math.round(data.accuracy / data.total)
    }))
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 6);

  classSummaryList.innerHTML = "";
  classItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.cls}: ${item.avg}% avg (${item.count} tests)`;
    classSummaryList.appendChild(li);
  });

  const weakMap = {};
  reports.forEach((report) => {
    (report.answers || []).forEach((ans) => {
      if (!ans.correct) {
        const key = ans.prompt;
        weakMap[key] = (weakMap[key] || 0) + 1;
      }
    });
  });

  const weakItems = Object.entries(weakMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  weakPointsList.innerHTML = "";
  if (!weakItems.length) {
    weakPointsList.innerHTML = "<li>No frequent weak points yet.</li>";
    return;
  }

  weakItems.forEach(([prompt, count]) => {
    const li = document.createElement("li");
    li.textContent = `${prompt} (${count} mistakes)`;
    weakPointsList.appendChild(li);
  });
}

function loadReports() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveReport(report) {
  const reports = loadReports();
  reports.unshift(report);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports.slice(0, 200)));
}

function renderHistoryTable() {
  const reports = loadReports();
  historyBody.innerHTML = "";

  if (!reports.length) {
    const row = document.createElement("tr");
    row.innerHTML = "<td colspan='6'>No reports yet. Start a student test above.</td>";
    historyBody.appendChild(row);
    return;
  }

  reports.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${escapeHtml(item.studentName)}</td>
      <td>${escapeHtml(item.studentClass || "-")}</td>
      <td>${item.correct} / ${item.total}</td>
      <td>${item.accuracy}%</td>
      <td>${escapeHtml(item.proficiency)}</td>
      <td>${new Date(item.finishedAt).toLocaleString()}</td>
    `;
    historyBody.appendChild(row);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function startQuiz() {
  const studentName = studentNameInput.value.trim();
  const studentClass = studentClassInput.value.trim();

  if (!studentName) {
    setupError.textContent = "Please enter a student name. 请输入学生姓名哦～";
    return;
  }

  setupError.textContent = "";

  // Show loading overlay briefly for smooth transition
  loadingOverlay.classList.remove("hidden");
  setTimeout(() => {
    loadingOverlay.classList.add("hidden");

    state = {
      studentName,
      studentClass,
      index: 0,
      answers: [],
      correct: 0,
      lives: 3,
      stars: 0,
      streak: 0,
      bestStreak: 0,
      timedMode: timedModeToggle.checked,
      timerId: null,
      timeLeft: 20,
      questionLocked: false,
      timeouts: 0,
      startedAt: new Date().toISOString(),
      finishedReport: null
    };

    setupCard.classList.add("hidden");
    summaryCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    renderHud();
    renderQuestion();
  }, 600);
}

function renderQuestion() {
  const q = questionBank[state.index];
  const total = questionBank.length;
  const levelStartIndex = {
    Easy: 0,
    Medium: 6,
    Hard: 12
  };

  levelBadge.textContent = q.level;
  progressText.textContent = `Question ${state.index + 1} / ${total} · 第${state.index + 1}题`;
  const pct = Math.round(((state.index + 1) / total) * 100);
  progressFill.style.width = `${pct}%`;
  progressPct.textContent = `${pct}% complete · 已完成 ${pct}%`;

  // CEFR and skill tags
  cefrTag.textContent = `CEFR: ${q.cefr || "A1"}`;
  skillTag.textContent = `Skill: ${q.skill || "Grammar"}`;

  storyCue.textContent = q.story;
  storyCue.classList.remove("zoomed");
  questionText.textContent = q.prompt;
  feedbackText.textContent = "";
  nextBtn.classList.add("hidden");
  nextBtn.textContent = "Next 下一题 →";
  state.questionLocked = false;

  if (state.index === levelStartIndex[q.level]) {
    levelBanner.textContent = `🎮 ${q.level} stage started! Help Lynn unlock the next garden gate.`;
    levelBanner.classList.remove("hidden");
  } else {
    levelBanner.classList.add("hidden");
  }

  // Reset section visibility
  listeningSection.classList.add("hidden");
  writingSection.classList.add("hidden");
  optionsWrap.classList.remove("hidden");

  if (q.type === "listening") {
    renderListeningQuestion(q);
  } else if (q.type === "writing") {
    renderWritingQuestion(q);
  } else {
    renderMcqOptions(q);
  }

  startQuestionTimer();
}

function renderMcqOptions(q) {
  optionsWrap.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "btn option-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuestion(option, btn));
    optionsWrap.appendChild(btn);
  });
}

/* ── Listening simulation ──────────────────────────────── */
function renderListeningQuestion(q) {
  listeningSection.classList.remove("hidden");
  transcriptReveal.textContent = "";
  transcriptReveal.classList.remove("visible");
  playStatus.textContent = "";
  playAudioBtn.classList.remove("hidden");
  pauseAudioBtn.classList.add("hidden");
  listeningState = { playCount: 0, playing: false, timerId: null };

  renderMcqOptions(q);
}

function simulateAudioPlay(q) {
  if (listeningState.playCount >= 2) {
    playStatus.textContent = "Already played 2 times. 已播放2次。";
    return;
  }
  if (listeningState.playing) return;

  listeningState.playing = true;
  listeningState.playCount += 1;
  const count = listeningState.playCount;
  playStatus.textContent = `▶ Playing... 正在播放第${count}遍`;
  playAudioBtn.classList.add("hidden");
  pauseAudioBtn.classList.remove("hidden");

  // Simulate playback: show transcript after a brief delay
  listeningState.timerId = setTimeout(() => {
    listeningState.playing = false;
    transcriptReveal.textContent = `🔊 ${q.transcript}`;
    transcriptReveal.classList.add("visible");
    pauseAudioBtn.classList.add("hidden");

    if (listeningState.playCount < 2) {
      playAudioBtn.classList.remove("hidden");
      playStatus.textContent = `Played ${count} time(s). Click ▶ to play again. 已播放${count}次。可再播放一次。`;
    } else {
      playStatus.textContent = `Played 2 times. 已播放2次。Now choose your answer! 请选择答案。`;
    }
  }, 1800);
}

/* ── Writing question ──────────────────────────────────── */
function renderWritingQuestion(q) {
  writingSection.classList.remove("hidden");
  // Clear and hide options wrap so no stale MCQ buttons show
  optionsWrap.innerHTML = "";
  optionsWrap.classList.add("hidden");
  writingInput.value = "";
  writingInput.disabled = false;
  writingCaseLower = true;
  writingCaseBtn.textContent = "A/a";
  wordCountDisplay.textContent = "0 words · 0个单词";
  wordCountDisplay.className = "word-count";

  // Render topic hint tags
  topicTagsRow.innerHTML = '<span style="font-size:0.9rem; font-weight:700; color: var(--muted);">Keywords 关键词:</span>';
  if (q.topicHints) {
    q.topicHints.forEach((hint) => {
      const tag = document.createElement("span");
      tag.className = "topic-tag";
      tag.textContent = hint;
      topicTagsRow.appendChild(tag);
    });
  }

  // Show Next button as "Submit" for writing questions
  nextBtn.textContent = "Submit Writing 提交 →";
  nextBtn.classList.remove("hidden");
}

function answerQuestion(option, selectedButton) {
  if (state.questionLocked) {
    return;
  }

  const q = questionBank[state.index];
  const buttons = Array.from(optionsWrap.querySelectorAll("button"));
  const isCorrect = option === q.answer;
  let starsEarned = 0;
  state.questionLocked = true;
  clearQuestionTimer();

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === q.answer) {
      btn.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
    feedbackText.textContent = applyWrongImpact();
  } else {
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    starsEarned = 10 + Math.min(state.streak * 2, 10);
    state.stars += starsEarned;
  }

  renderHud();

  state.answers.push({
    id: q.id,
    level: q.level,
    skill: q.skill || "Grammar",
    prompt: q.prompt,
    selected: option,
    answer: q.answer,
    correct: isCorrect,
    starsEarned,
    streakAfter: state.streak,
    timeout: false
  });

  if (isCorrect) {
    feedbackText.textContent = `✅ Great job! ${q.explain} +${starsEarned} ⭐`;
  } else if (!feedbackText.textContent) {
    feedbackText.textContent = `💡 Not quite! ${q.explain} Try the next one! 继续加油！`;
  }

  nextBtn.classList.remove("hidden");
}

function submitWritingAnswer() {
  if (state.questionLocked) {
    // Already submitted — advance to next question
    state.index += 1;
    if (state.index >= questionBank.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
    return;
  }

  const q = questionBank[state.index];
  const text = writingInput.value.trim();
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const minWords = q.minWords || 3;

  if (wordCount < minWords) {
    feedbackText.textContent = `Please write at least ${minWords} words. 请至少写${minWords}个单词哦～`;
    return;
  }

  state.questionLocked = true;
  clearQuestionTimer();

  state.correct += 1;
  state.streak += 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  const starsEarned = 15;
  state.stars += starsEarned;
  renderHud();

  state.answers.push({
    id: q.id,
    level: q.level,
    skill: q.skill || "Writing",
    prompt: q.prompt,
    selected: text,
    answer: "__writing__",
    correct: true,
    starsEarned,
    streakAfter: state.streak,
    timeout: false,
    writingWordCount: wordCount
  });

  feedbackText.textContent = `✅ Wonderful writing! ${q.explain} +${starsEarned} ⭐ 写得很棒！`;
  nextBtn.textContent = "Next 下一题 →";
  nextBtn.classList.remove("hidden");
  writingInput.disabled = true;
}

function nextQuestion() {
  clearQuestionTimer();

  const q = questionBank[state.index];
  // For writing questions, delegate entirely to submitWritingAnswer
  if (q && q.type === "writing") {
    submitWritingAnswer();
    return;
  }

  state.index += 1;
  if (state.index >= questionBank.length) {
    finishQuiz();
    return;
  }
  renderQuestion();
}

function calcBadges(report) {
  const badges = [];

  if (report.accuracy >= 90) {
    badges.push("🏆 Golden Owl");
  }
  if ((report.stars || 0) >= 220) {
    badges.push("🌟 Star Collector");
  }
  if ((report.bestStreak || 0) >= 5) {
    badges.push("🔥 Combo Hero");
  }
  if ((report.timeouts || 0) === 0 && report.timedMode) {
    badges.push("⏱️ Time Master");
  }
  if ((report.correct || 0) >= 15) {
    badges.push("📘 KET Champion");
  }
  if (!badges.length) {
    badges.push("🌱 Brave Starter");
  }

  return badges;
}

function calcProficiency(report) {
  const byLevel = {
    Easy: { total: 0, correct: 0 },
    Medium: { total: 0, correct: 0 },
    Hard: { total: 0, correct: 0 }
  };

  report.answers.forEach((a) => {
    byLevel[a.level].total += 1;
    if (a.correct) {
      byLevel[a.level].correct += 1;
    }
  });

  const safeRate = (obj) => (obj.total > 0 ? obj.correct / obj.total : 0);
  const easyRate = safeRate(byLevel.Easy);
  const mediumRate = safeRate(byLevel.Medium);
  const hardRate = safeRate(byLevel.Hard);

  if (hardRate >= 0.67 && report.accuracy >= 75) {
    return {
      label: "KET Star (A2 Strong)",
      advice: "🌟 Excellent work! You are ready for real KET reading and listening papers. Keep it up! 棒棒的！可以挑战真实KET题目了！",
      vocabEstimate: 1200,
      zpd: "B1 Preview (Cambridge B1 Preliminary)",
      byLevel
    };
  }

  if (mediumRate >= 0.67 && report.accuracy >= 55) {
    return {
      label: "Garden Explorer (A2 Developing)",
      advice: "👍 Good progress! Keep practising grammar patterns and daily vocabulary. You'll be a KET Star soon! 很好！继续练习语法和词汇，很快就能进步！",
      vocabEstimate: 700,
      zpd: "KET A2 (Cambridge A2 Key)",
      byLevel
    };
  }

  return {
    label: "Starter Bloom (A1-A2 Bridge)",
    advice: "🌱 Great start! Focus on basic verbs, prepositions, and short sentences. You can do it! 开始得很好！继续练习基础动词和介词，加油！",
    vocabEstimate: 350,
    zpd: "A2 Foundation (KET Entry Level)",
    byLevel
  };
}

function calcGrowthTrends(report) {
  const bySkill = {};
  report.answers.forEach((a) => {
    const sk = a.skill || "Grammar";
    if (!bySkill[sk]) bySkill[sk] = { total: 0, correct: 0 };
    bySkill[sk].total += 1;
    if (a.correct) bySkill[sk].correct += 1;
  });

  return Object.entries(bySkill).map(([skill, data]) => {
    const rate = Math.round((data.correct / data.total) * 100);
    const emoji = rate >= 80 ? "✅" : rate >= 50 ? "⚡" : "📖";
    return `${emoji} ${skill}: ${rate}% (${data.correct}/${data.total})`;
  });
}

function finishQuiz() {
  clearQuestionTimer();
  const total = questionBank.length;
  const accuracy = Math.round((state.correct / total) * 100);
  const baseReport = {
    studentName: state.studentName,
    studentClass: state.studentClass,
    total,
    correct: state.correct,
    accuracy,
    stars: state.stars,
    bestStreak: state.bestStreak,
    timedMode: state.timedMode,
    timeouts: state.timeouts,
    startedAt: state.startedAt || new Date().toISOString(),
    finishedAt: new Date().toISOString(),
    answers: state.answers
  };

  const levelResult = calcProficiency(baseReport);
  const report = {
    ...baseReport,
    proficiency: levelResult.label,
    advice: levelResult.advice,
    vocabEstimate: levelResult.vocabEstimate,
    zpd: levelResult.zpd,
    levelStats: levelResult.byLevel,
    badges: calcBadges(baseReport)
  };

  state.finishedReport = report;
  saveReport(report);
  playVictorySound();
  renderSummary(report);
  renderHistoryTable();
  renderTeacherOverview();
}

function renderSummary(report) {
  quizCard.classList.add("hidden");
  summaryCard.classList.remove("hidden");
  studentHeadline.textContent = `🎓 Student: ${report.studentName}${report.studentClass ? ` (${report.studentClass})` : ""} — Well done! 太棒了！`;
  totalScore.textContent = `${report.correct} / ${report.total}`;
  accuracyRate.textContent = `${report.accuracy}%`;
  proficiencyTag.textContent = report.proficiency;
  gameStars.textContent = String(report.stars || 0);
  bestCombo.textContent = `x${report.bestStreak || 0}`;
  vocabPredict.textContent = `~${report.vocabEstimate || 350} words`;
  zpdTag.textContent = report.zpd || "A2 Foundation";
  summaryAdvice.textContent = report.advice;

  // Badge wall
  badgeWallList.innerHTML = "";
  (report.badges || ["🌱 Brave Starter"]).forEach((badge) => {
    const li = document.createElement("li");
    li.className = "badge-chip";
    li.textContent = badge;
    badgeWallList.appendChild(li);
  });

  // Feasibility / growth trends
  feasibilityIntro.textContent = "Here is a skill-by-skill summary of this test. 以下是各技能得分概览：";
  growthTrendList.innerHTML = "";
  const trends = calcGrowthTrends(report);
  trends.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    growthTrendList.appendChild(li);
  });

  // Scaffolding
  const accuracy = report.accuracy;
  const parentTips = [
    "Read a short English story together every day. 每天一起读一个英文小故事。",
    accuracy < 60 ? "Practice basic vocabulary with picture cards. 用图卡练习基础词汇。" : "Try KET official practice books (Cambridge). 尝试剑桥KET官方练习册。",
    "Praise effort, not just scores! 表扬努力过程，不只是分数！"
  ];
  const teacherTips = [
    `Focus area: ${accuracy < 60 ? "basic sentence patterns and key vocabulary" : "complex grammar and reading comprehension"}`,
    "Use pair work for speaking practice. 使用配对练习口语。",
    "Review incorrect answers from this report. 复习本报告中的错误题目。"
  ];
  const studentTips = [
    "Read one English sentence every morning! 每天早上读一句英语！",
    accuracy < 60 ? "Try the Word Fill Game to practise spelling. 试试填词游戏练习拼写。" : "Challenge yourself with the timed mode! 尝试计时模式挑战自己！",
    "You did great today — keep going! 今天表现很棒，继续加油！ 🌟"
  ];

  const fillList = (el, tips) => {
    el.innerHTML = "";
    tips.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      el.appendChild(li);
    });
  };
  fillList(parentScaffold, parentTips);
  fillList(teacherScaffold, teacherTips);
  fillList(studentScaffold, studentTips);

  summaryCard.classList.remove("summary-celebrate");
  void summaryCard.offsetWidth;
  summaryCard.classList.add("summary-celebrate");
}

function resetForNewStudent() {
  clearQuestionTimer();
  studentNameInput.value = "";
  studentClassInput.value = "";
  timedModeToggle.checked = false;
  clearDataMsg.textContent = "";
  state.finishedReport = null;

  summaryCard.classList.add("hidden");
  quizCard.classList.add("hidden");
  setupCard.classList.remove("hidden");
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportCurrentJson() {
  if (!state.finishedReport) {
    alert("Please finish one student test first.");
    return;
  }

  const safeName = state.finishedReport.studentName.replace(/\s+/g, "_");
  const filename = `${safeName || "student"}_report.json`;
  downloadFile(filename, JSON.stringify(state.finishedReport, null, 2), "application/json");
}

function toCsvValue(text) {
  const escaped = String(text).replaceAll('"', '""');
  return `"${escaped}"`;
}

function exportAllCsv() {
  const reports = loadReports();
  if (!reports.length) {
    alert("No report data to export yet.");
    return;
  }

  const header = [
    "studentName",
    "studentClass",
    "correct",
    "total",
    "accuracy",
    "stars",
    "bestStreak",
    "timedMode",
    "timeouts",
    "badges",
    "proficiency",
    "finishedAt"
  ];

  const rows = reports.map((r) => [
    r.studentName,
    r.studentClass || "",
    r.correct,
    r.total,
    `${r.accuracy}%`,
    r.stars ?? 0,
    r.bestStreak ?? 0,
    r.timedMode ? "yes" : "no",
    r.timeouts ?? 0,
    (r.badges || []).join(" | "),
    r.proficiency,
    r.finishedAt
  ]);

  const csv = [header.join(","), ...rows.map((row) => row.map(toCsvValue).join(","))].join("\n");
  downloadFile("lynn_kids_garden_reports.csv", csv, "text/csv;charset=utf-8");
}

function clearAllStudentData() {
  const confirmed = window.confirm("Clear all saved student reports? This action cannot be undone.");
  if (!confirmed) {
    clearDataMsg.textContent = "Clear cancelled.";
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state.finishedReport = null;
  renderHistoryTable();
  renderTeacherOverview();
  clearDataMsg.textContent = "All student data has been cleared.";
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", resetForNewStudent);
exportCurrentBtn.addEventListener("click", exportCurrentJson);
exportCsvBtn.addEventListener("click", exportAllCsv);
clearDataBtn.addEventListener("click", clearAllStudentData);
teacherUnlockBtn.addEventListener("click", unlockTeacherPage);

// Listening simulation buttons
playAudioBtn.addEventListener("click", () => {
  const q = questionBank[state.index];
  if (q && q.type === "listening") {
    simulateAudioPlay(q);
  }
});
pauseAudioBtn.addEventListener("click", () => {
  if (listeningState.timerId) {
    clearTimeout(listeningState.timerId);
    listeningState.timerId = null;
  }
  listeningState.playing = false;
  pauseAudioBtn.classList.add("hidden");
  playAudioBtn.classList.remove("hidden");
  playStatus.textContent = "Paused. 已暂停。Click ▶ to continue.";
});

// Writing submit button (attached to next btn area via submitWritingAnswer)
// Writing word counter
writingInput.addEventListener("input", () => {
  const text = writingInput.value.trim();
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const q = questionBank[state.index];
  const minWords = (q && q.minWords) || 3;
  wordCountDisplay.textContent = `${words} words · ${words}个单词`;
  if (words >= minWords) {
    wordCountDisplay.className = "word-count ok";
  } else {
    wordCountDisplay.className = "word-count";
  }
});

// Writing case toggle
writingCaseBtn.addEventListener("click", () => {
  writingCaseLower = !writingCaseLower;
  writingCaseBtn.textContent = writingCaseLower ? "a→A" : "A→a";
  writingCaseBtn.setAttribute("aria-label", writingCaseLower ? "Switch to uppercase 切换大写" : "Switch to lowercase 切换小写");
  const pos = writingInput.selectionStart;
  writingInput.focus();
  writingInput.setSelectionRange(pos, pos);
});

// Zoom button
zoomBtn.addEventListener("click", () => {
  storyCue.classList.toggle("zoomed");
  zoomBtn.textContent = storyCue.classList.contains("zoomed") ? "🔍−" : "🔍";
  zoomBtn.setAttribute("aria-label", storyCue.classList.contains("zoomed") ? "Zoom out 缩小" : "Zoom in 放大");
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tabTarget;
    if (target === "teacher") {
      ensureTeacherLock();
    }
    switchTab(target);
  });
});

wordGameStartBtn.addEventListener("click", startWordGame);
wordGameCheckBtn.addEventListener("click", checkWordGameAnswer);
wordGameNextBtn.addEventListener("click", nextWordGameQuestion);
wordGameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWordGameAnswer();
  }
});
soundToggle.addEventListener("change", () => {
  saveSoundPreference(soundToggle.checked);
  if (soundToggle.checked) {
    ensureAudioContext();
  }
});

studentNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startQuiz();
  }
});

renderHistoryTable();
renderTeacherOverview();
soundToggle.checked = loadSoundPreference();
switchTab("student");
ensureTeacherLock();