const STORAGE_KEY = "lynn_kids_garden_reports";
const SOUND_PREF_KEY = "lynn_kids_garden_sound";

const questionBank = [
  {
    id: 1,
    level: "Easy",
    story: "🌱 Lynn finds a tiny seed. Help her choose the right word.",
    prompt: "I ___ eight years old.",
    options: ["am", "is", "are", "be"],
    answer: "am",
    explain: "Use 'am' with 'I'."
  },
  {
    id: 2,
    level: "Easy",
    story: "🐝 A bee asks: what is this?",
    prompt: "Choose the correct word: 'This is a ___ (picture of an apple).'",
    options: ["banana", "apple", "orange", "pear"],
    answer: "apple",
    explain: "The picture word is 'apple'."
  },
  {
    id: 3,
    level: "Easy",
    story: "🌼 Lynn waters flowers every day.",
    prompt: "She ___ to school at 8 o'clock.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes",
    explain: "For 'she', use verb + s."
  },
  {
    id: 4,
    level: "Easy",
    story: "🧺 We pack a picnic basket.",
    prompt: "There are three ___ in the basket.",
    options: ["sandwich", "sandwiches", "sandwichs", "sandwiche"],
    answer: "sandwiches",
    explain: "Plural of sandwich is sandwiches."
  },
  {
    id: 5,
    level: "Easy",
    story: "🐰 A rabbit hides behind a tree.",
    prompt: "The rabbit is ___ the tree.",
    options: ["on", "under", "behind", "between"],
    answer: "behind",
    explain: "Behind = at the back of something."
  },
  {
    id: 6,
    level: "Easy",
    story: "☀️ Morning in the garden.",
    prompt: "What time greeting is correct?",
    options: ["Good night", "Good evening", "Good morning", "Goodbye"],
    answer: "Good morning",
    explain: "We say 'Good morning' in the morning."
  },
  {
    id: 7,
    level: "Medium",
    story: "🌳 Lynn reaches the forest gate.",
    prompt: "I have got ___ new backpack.",
    options: ["a", "an", "the", "-"],
    answer: "a",
    explain: "Use 'a' before consonant sounds like 'new'."
  },
  {
    id: 8,
    level: "Medium",
    story: "🦊 A fox asks about yesterday.",
    prompt: "We ___ football yesterday afternoon.",
    options: ["play", "played", "plays", "playing"],
    answer: "played",
    explain: "Yesterday means past tense: played."
  },
  {
    id: 9,
    level: "Medium",
    story: "🎒 Time for school bag check.",
    prompt: "Which sentence is correct?",
    options: ["He don't like milk.", "He doesn't like milk.", "He not like milk.", "He doesn't likes milk."],
    answer: "He doesn't like milk.",
    explain: "After doesn't, use base verb: like."
  },
  {
    id: 10,
    level: "Medium",
    story: "🚲 Lynn races to the bridge.",
    prompt: "My bike is ___ than your bike.",
    options: ["fast", "faster", "fastest", "more fast"],
    answer: "faster",
    explain: "Comparative of fast is faster."
  },
  {
    id: 11,
    level: "Medium",
    story: "🍓 Pick fruit for lunch.",
    prompt: "How ___ strawberries do you want?",
    options: ["many", "much", "any", "few"],
    answer: "many",
    explain: "Use many with countable plural nouns."
  },
  {
    id: 12,
    level: "Medium",
    story: "📚 Lynn checks her timetable.",
    prompt: "We ___ English on Mondays.",
    options: ["have", "has", "having", "had"],
    answer: "have",
    explain: "With 'we', use 'have'."
  },
  {
    id: 13,
    level: "Hard",
    story: "🏰 Final castle challenge begins.",
    prompt: "If it ___ tomorrow, we will stay at home.",
    options: ["rain", "rains", "raining", "rained"],
    answer: "rains",
    explain: "First conditional uses present simple: rains."
  },
  {
    id: 14,
    level: "Hard",
    story: "🗝️ Lynn needs the grammar key.",
    prompt: "Choose the correct sentence.",
    options: ["She has never been to London.", "She never has been to London.", "She has been never to London.", "Never she has been to London."],
    answer: "She has never been to London.",
    explain: "Adverb placement: has never been."
  },
  {
    id: 15,
    level: "Hard",
    story: "🧩 Build the sentence bridge.",
    prompt: "I enjoy ___ books in the evening.",
    options: ["read", "to read", "reading", "reads"],
    answer: "reading",
    explain: "Enjoy is followed by verb + ing."
  },
  {
    id: 16,
    level: "Hard",
    story: "🌟 One more clue from the stars.",
    prompt: "By the time we arrived, the film ___.",
    options: ["starts", "started", "had started", "has started"],
    answer: "had started",
    explain: "Past perfect for earlier past action."
  },
  {
    id: 17,
    level: "Hard",
    story: "🧠 Think like a language hero.",
    prompt: "This is the boy ___ won the spelling contest.",
    options: ["which", "who", "where", "whose"],
    answer: "who",
    explain: "Use who for people."
  },
  {
    id: 18,
    level: "Hard",
    story: "👑 Last gate: choose the best answer.",
    prompt: "If I ___ more time, I would learn French.",
    options: ["have", "had", "will have", "am having"],
    answer: "had",
    explain: "Second conditional uses past simple in if-clause."
  }
];

const setupCard = document.getElementById("setupCard");
const quizCard = document.getElementById("quizCard");
const summaryCard = document.getElementById("summaryCard");
const historyBody = document.getElementById("historyBody");
const levelBanner = document.getElementById("levelBanner");

const livesValue = document.getElementById("livesValue");
const starsValue = document.getElementById("starsValue");
const streakValue = document.getElementById("streakValue");
const timerValue = document.getElementById("timerValue");

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

const studentHeadline = document.getElementById("studentHeadline");
const totalScore = document.getElementById("totalScore");
const accuracyRate = document.getElementById("accuracyRate");
const proficiencyTag = document.getElementById("proficiencyTag");
const summaryAdvice = document.getElementById("summaryAdvice");
const gameStars = document.getElementById("gameStars");
const bestCombo = document.getElementById("bestCombo");
const badgeWallList = document.getElementById("badgeWallList");

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
    return "🛟 Magic heart! You get one more chance to continue the adventure.";
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
    prompt: q.prompt,
    selected: "(timeout)",
    answer: q.answer,
    correct: false,
    starsEarned: 0,
    streakAfter: state.streak,
    timeout: true
  });

  feedbackText.textContent = magicHeartText || `⏰ Time's up! ${q.explain}`;
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
    setupError.textContent = "Please enter a student name.";
    return;
  }

  setupError.textContent = "";
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
  progressText.textContent = `Question ${state.index + 1} / ${total}`;
  progressFill.style.width = `${((state.index + 1) / total) * 100}%`;
  storyCue.textContent = q.story;
  questionText.textContent = q.prompt;
  feedbackText.textContent = "";
  nextBtn.classList.add("hidden");
  state.questionLocked = false;

  if (state.index === levelStartIndex[q.level]) {
    levelBanner.textContent = `🎮 ${q.level} stage started! Help Lynn unlock the next garden gate.`;
    levelBanner.classList.remove("hidden");
  } else {
    levelBanner.classList.add("hidden");
  }

  optionsWrap.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "btn option-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuestion(option, btn));
    optionsWrap.appendChild(btn);
  });

  startQuestionTimer();
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
    prompt: q.prompt,
    selected: option,
    answer: q.answer,
    correct: isCorrect,
    starsEarned,
    streakAfter: state.streak,
    timeout: false
  });

  if (isCorrect) {
    feedbackText.textContent = `✅ Great! ${q.explain} +${starsEarned} stars`;
  } else if (!feedbackText.textContent) {
    feedbackText.textContent = `💡 Not this one. ${q.explain}`;
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  clearQuestionTimer();
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

  const easyRate = byLevel.Easy.correct / byLevel.Easy.total;
  const mediumRate = byLevel.Medium.correct / byLevel.Medium.total;
  const hardRate = byLevel.Hard.correct / byLevel.Hard.total;

  if (hardRate >= 0.67 && report.accuracy >= 75) {
    return {
      label: "KET Star (A2 Strong)",
      advice: "Excellent work! Move to longer reading and listening practice to prepare for real KET papers.",
      byLevel
    };
  }

  if (mediumRate >= 0.67 && report.accuracy >= 55) {
    return {
      label: "Garden Explorer (A2 Developing)",
      advice: "Good progress. Keep training grammar patterns and daily vocabulary to become a KET Star.",
      byLevel
    };
  }

  return {
    label: "Starter Bloom (A1-A2 Bridge)",
    advice: "Great start. Focus on basic verbs, prepositions, and short sentence reading before medium tasks.",
    byLevel
  };
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
  studentHeadline.textContent = `Student: ${report.studentName}${report.studentClass ? ` (${report.studentClass})` : ""}`;
  totalScore.textContent = `${report.correct} / ${report.total}`;
  accuracyRate.textContent = `${report.accuracy}%`;
  proficiencyTag.textContent = report.proficiency;
  gameStars.textContent = String(report.stars || 0);
  bestCombo.textContent = `x${report.bestStreak || 0}`;
  summaryAdvice.textContent = report.advice;

  badgeWallList.innerHTML = "";
  (report.badges || ["🌱 Brave Starter"]).forEach((badge) => {
    const li = document.createElement("li");
    li.className = "badge-chip";
    li.textContent = badge;
    badgeWallList.appendChild(li);
  });

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