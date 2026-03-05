const STORAGE_KEY = "lynn_kids_garden_reports";
const SOUND_PREF_KEY = "lynn_kids_garden_sound";

function makePictureSvg(label) {
  const safe = String(label)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return `data:image/svg+xml;utf8,${
    `<svg xmlns='http://www.w3.org/2000/svg' width='480' height='260'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='#f6fbff'/>
          <stop offset='100%' stop-color='#e7f2ff'/>
        </linearGradient>
      </defs>
      <rect width='480' height='260' fill='url(#g)'/>
      <rect x='24' y='24' width='432' height='212' rx='24' fill='#ffffff' stroke='#d6e3f7' stroke-width='3'/>
      <text x='240' y='138' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='34' fill='#35568e'>${safe}</text>
    </svg>`
  }`;
}

const questionBank = [
  {
    id: 1,
    level: "ABC Gate",
    cefr: "Pre-A1",
    skill: "Vocabulary",
    type: "mcq",
    story: "ABC warm-up. Let us find the right first word. ABC热身，先找到正确单词。",
    prompt: "Which word is correct? / 选出正确单词",
    promptZh: "请选出表示苹果的单词。",
    options: ["apple", "appl", "aple"],
    answer: "apple",
    explain: "Good start. This is a core word in early reading."
  },
  {
    id: 2,
    level: "ABC Gate",
    cefr: "Pre-A1",
    skill: "Listening",
    type: "listening",
    story: "Listen and choose. 听一听，选一选。",
    prompt: "Click the picture you hear. / 点击你听到的图片",
    promptZh: "音频会播放两次。",
    options: ["cat", "dog", "fish"],
    answer: "cat",
    listenText: "I can see a cat.",
    explain: "Listening key word: cat."
  },
  {
    id: 3,
    level: "ABC Gate",
    cefr: "Pre-A1",
    skill: "Phonics",
    type: "mcq",
    story: "Find the sound. 找到正确发音。",
    prompt: "Which starts with /b/? / 哪个单词以 /b/ 开头",
    promptZh: "观察首字母发音。",
    options: ["ball", "sun", "egg"],
    answer: "ball",
    explain: "b as in ball."
  },
  {
    id: 4,
    level: "Phonics",
    cefr: "A1",
    skill: "Reading",
    type: "mcq",
    story: "Short sentence reading. 阅读短句并选择。",
    prompt: "She ___ to school every day.",
    promptZh: "选出正确动词形式。",
    options: ["go", "goes", "going"],
    answer: "goes",
    explain: "With she, we use goes."
  },
  {
    id: 5,
    level: "Phonics",
    cefr: "A1",
    skill: "Picture Talk",
    type: "picture",
    story: "Look at the picture and say one sentence. 看图说一句话。",
    prompt: "Write one short sentence about the picture.",
    promptZh: "请写至少1句英文（例如：The boy is running.）。",
    picture: makePictureSvg("A boy is running"),
    minWords: 4,
    explain: "Great speaking-to-writing transfer."
  },
  {
    id: 6,
    level: "Phonics",
    cefr: "A1",
    skill: "Listening",
    type: "listening",
    story: "Daily routine listening. 日常场景听力。",
    prompt: "What does Lucy drink? / Lucy喝什么？",
    promptZh: "Each audio will play twice. 每段音频播放两次。",
    options: ["milk", "water", "juice"],
    answer: "milk",
    listenText: "Lucy drinks milk in the morning.",
    explain: "The answer is milk."
  },
  {
    id: 7,
    level: "KET",
    cefr: "A2",
    skill: "Grammar",
    type: "mcq",
    story: "KET checkpoint. KET语法检查点。",
    prompt: "We ___ football yesterday.",
    promptZh: "注意 yesterday 的时态。",
    options: ["play", "played", "plays"],
    answer: "played",
    explain: "Yesterday means past tense."
  },
  {
    id: 8,
    level: "KET",
    cefr: "A2",
    skill: "Reading",
    type: "mcq",
    story: "Read and choose the best answer. 阅读并选择最佳答案。",
    prompt: "He does not like tea, ___ he likes coffee.",
    promptZh: "请选择连接词。",
    options: ["and", "but", "so"],
    answer: "but",
    explain: "Contrast uses but."
  },
  {
    id: 9,
    level: "KET",
    cefr: "A2",
    skill: "Reading",
    type: "mcq",
    story: "Picture + reading matching. 图文匹配。",
    prompt: "Choose the sentence that matches the picture.",
    promptZh: "看图后选择最贴切句子。",
    picture: makePictureSvg("Two children are reading"),
    options: [
      "Two children are reading books.",
      "Two children are playing football.",
      "Two children are sleeping."
    ],
    answer: "Two children are reading books.",
    explain: "Picture detail: reading books."
  },
  {
    id: 10,
    level: "KET",
    cefr: "A2",
    skill: "Speaking",
    type: "speaking",
    story: "Read aloud task. 朗读任务。",
    prompt: "Read aloud: 'My family likes going to the park on Sundays.'",
    promptZh: "请大声朗读，然后自评一次。",
    rubric: ["Clear and fluent", "Some pauses", "Need more practice"],
    explain: "Speaking confidence is part of KET readiness."
  },
  {
    id: 11,
    level: "KET",
    cefr: "A2",
    skill: "Writing",
    type: "writing",
    story: "Short writing output. 短文写作输出。",
    prompt: "Write 3 to 5 sentences about your favorite day.",
    promptZh: "关键词参考：time, place, activity。",
    minSentences: 3,
    maxSentences: 5,
    keywords: ["time", "place", "activity"],
    explain: "Keep it simple and complete."
  },
  {
    id: 12,
    level: "KET",
    cefr: "A2",
    skill: "Writing",
    type: "writing",
    story: "Final mini composition. 最后一题：小作文。",
    prompt: "Look at the topic and write a short paragraph: 'My best friend'.",
    promptZh: "至少3句，不超过5句。",
    minSentences: 3,
    maxSentences: 5,
    keywords: ["name", "looks", "hobby"],
    explain: "You can do it. One idea per sentence."
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
const entryGateSelect = document.getElementById("entryGate");
const bookPowerUp = document.getElementById("bookPowerUp");
const bookThink = document.getElementById("bookThink");
const bookOxfordTree = document.getElementById("bookOxfordTree");

const levelBadge = document.getElementById("levelBadge");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const storyCue = document.getElementById("storyCue");
const questionText = document.getElementById("questionText");
const optionsWrap = document.getElementById("optionsWrap");
const interactionWrap = document.getElementById("interactionWrap");
const feedbackText = document.getElementById("feedbackText");
const nextBtn = document.getElementById("nextBtn");
const cefrTag = document.getElementById("cefrTag");
const skillTag = document.getElementById("skillTag");
const questionFigure = document.getElementById("questionFigure");
const questionImage = document.getElementById("questionImage");

const studentHeadline = document.getElementById("studentHeadline");
const totalScore = document.getElementById("totalScore");
const accuracyRate = document.getElementById("accuracyRate");
const proficiencyTag = document.getElementById("proficiencyTag");
const summaryAdvice = document.getElementById("summaryAdvice");
const gameStars = document.getElementById("gameStars");
const bestCombo = document.getElementById("bestCombo");
const badgeWallList = document.getElementById("badgeWallList");
const vocabPredict = document.getElementById("vocabPredict");
const zpdTag = document.getElementById("zpdTag");
const feasibilityIntro = document.getElementById("feasibilityIntro");
const growthTrendList = document.getElementById("growthTrendList");
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
let listeningPlayCount = 0;

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

let state = {
  studentName: "",
  studentClass: "",
  entryGate: "ABC Gate",
  materials: [],
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
  finishedReport: null,
  interactionDraft: null
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
    teacherLockMsg.textContent = "Unlocked. Welcome, teacher! / 已解锁";
    teacherLockBox.classList.add("hidden");
    teacherContent.classList.remove("hidden");
    renderTeacherOverview();
    return;
  }

  teacherUnlocked = false;
  teacherLockMsg.textContent = "Wrong password. Both fields must be 8888. / 两个密码都要输入8888";
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
  wordGameStatus.textContent = "Playing / 进行中";
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
    wordGameFeedback.textContent = "Correct. Well done! / 答对了";
  } else {
    wordGameFeedback.textContent = `Try again next one. Correct: ${item.answer} / 正确答案：${item.answer}`;
  }

  wordGameScore.textContent = String(wordGame.score);
  wordGame.checked = true;
}

function nextWordGameQuestion() {
  if (!wordGame.started) {
    return;
  }

  if (!wordGame.checked) {
    wordGameFeedback.textContent = "Please check first. / 请先点击Check";
    return;
  }

  wordGame.index += 1;
  if (wordGame.index >= wordFillItems.length) {
    wordGameStatus.textContent = "Finished / 完成";
    wordGamePrompt.textContent = "Great job! You finished the word game. / 已完成单词游戏";
    wordGameFeedback.textContent = `Final score: ${wordGame.score} / ${wordFillItems.length}`;
    wordGameProgress.textContent = `${wordFillItems.length} / ${wordFillItems.length}`;
    wordGame.started = false;
    return;
  }

  renderWordGameQuestion();
}

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

function isProductiveTask(question) {
  return ["writing", "speaking", "picture"].includes(question.type);
}

function getQuestionTimeLimit(question) {
  if (!state.timedMode) {
    return 20;
  }
  return isProductiveTask(question) ? 90 : 20;
}

function startQuestionTimer() {
  clearQuestionTimer();
  if (!state.timedMode) {
    return;
  }

  const q = questionBank[state.index];
  state.timeLeft = getQuestionTimeLimit(q);
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
    return "Magic heart: one more chance. / 魔法爱心：再给一次机会";
  }
  return "";
}

function handleTimeout() {
  if (state.questionLocked) {
    return;
  }

  const q = questionBank[state.index];
  state.questionLocked = true;
  state.timeouts += 1;

  if (q.type === "mcq" || q.type === "listening") {
    const buttons = Array.from(optionsWrap.querySelectorAll("button"));
    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === q.answer) {
        btn.classList.add("correct");
      }
    });
  }

  const magicHeartText = applyWrongImpact();
  renderHud();

  state.answers.push({
    id: q.id,
    level: q.level,
    cefr: q.cefr,
    skill: q.skill,
    prompt: q.prompt,
    selected: "(timeout)",
    answer: q.answer || "rubric",
    correct: false,
    starsEarned: 0,
    timeout: true,
    productive: isProductiveTask(q)
  });

  feedbackText.textContent = `${magicHeartText || "Time is up."} / 时间到啦`;
  nextBtn.classList.remove("hidden");
}

function readAloud(text) {
  if (!window.speechSynthesis) {
    feedbackText.textContent = "Audio not supported on this browser. / 当前浏览器不支持语音朗读";
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function getSelectedMaterials() {
  const result = [];
  if (bookPowerUp?.checked) {
    result.push("Power Up");
  }
  if (bookThink?.checked) {
    result.push("Think");
  }
  if (bookOxfordTree?.checked) {
    result.push("Oxford Tree");
  }
  return result;
}

function startQuiz() {
  const studentName = studentNameInput.value.trim();
  const studentClass = studentClassInput.value.trim();
  const materials = getSelectedMaterials();

  if (!studentName) {
    setupError.textContent = "Please enter student name. / 请输入学生姓名";
    return;
  }

  setupError.textContent = "Loading test... / 加载中，请稍等～";
  setTimeout(() => {
    state = {
      studentName,
      studentClass,
      entryGate: entryGateSelect?.value || "ABC Gate",
      materials,
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
      finishedReport: null,
      interactionDraft: null
    };

    setupError.textContent = "";
    setupCard.classList.add("hidden");
    summaryCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    renderHud();
    renderQuestion();
  }, 260);
}

function renderQuestionImage(q) {
  if (q.picture) {
    questionImage.src = q.picture;
    questionImage.alt = q.prompt;
    questionFigure.classList.remove("hidden");
    return;
  }

  questionFigure.classList.add("hidden");
  questionImage.removeAttribute("src");
}

function scoreProductiveAnswer(q, textValue, rubricValue) {
  const text = String(textValue || "").trim();
  let score = 0;

  if (q.type === "picture") {
    const words = text.split(/\s+/).filter(Boolean).length;
    score = words >= (q.minWords || 4) ? 1 : 0;
  }

  if (q.type === "writing") {
    const sentences = text.split(/[.!?]+/).map((v) => v.trim()).filter(Boolean).length;
    if (sentences >= (q.minSentences || 3) && sentences <= (q.maxSentences || 5)) {
      score = 2;
    } else if (sentences > 0) {
      score = 1;
    }
  }

  if (q.type === "speaking") {
    const map = {
      "Clear and fluent": 2,
      "Some pauses": 1,
      "Need more practice": 0
    };
    score = map[rubricValue] ?? 0;
  }

  const correct = score >= 1;
  return { score, correct };
}

function submitProductiveAnswer() {
  if (state.questionLocked) {
    return;
  }
  const q = questionBank[state.index];
  const textInput = interactionWrap.querySelector("textarea");
  const rubricInput = interactionWrap.querySelector("input[name='rubric']:checked");

  const rawText = textInput ? textInput.value.trim() : "";
  if ((q.type === "writing" || q.type === "picture") && rawText.length === 0) {
    feedbackText.textContent = "Please write your answer first. / 请先输入答案";
    return;
  }
  if (q.type === "speaking" && !rubricInput) {
    feedbackText.textContent = "Please choose a self-check level. / 请先选择自评等级";
    return;
  }

  clearQuestionTimer();
  state.questionLocked = true;

  const scored = scoreProductiveAnswer(q, rawText, rubricInput?.value || "");
  let starsEarned = 0;

  if (scored.correct) {
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    starsEarned = 8 + Math.min(state.streak * 2, 10);
    state.stars += starsEarned;
    feedbackText.textContent = `Good effort! +${starsEarned} stars / 表现不错，加${starsEarned}星`;
  } else {
    const warn = applyWrongImpact();
    feedbackText.textContent = `${warn || "Keep going."} / 继续加油`;
  }

  state.answers.push({
    id: q.id,
    level: q.level,
    cefr: q.cefr,
    skill: q.skill,
    prompt: q.prompt,
    selected: rawText || rubricInput?.value || "(no response)",
    answer: q.answer || "rubric",
    correct: scored.correct,
    starsEarned,
    timeout: false,
    productive: true
  });

  renderHud();
  nextBtn.classList.remove("hidden");
  interactionWrap.querySelectorAll("textarea, button, input").forEach((el) => {
    el.disabled = true;
  });
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
    cefr: q.cefr,
    skill: q.skill,
    prompt: q.prompt,
    selected: option,
    answer: q.answer,
    correct: isCorrect,
    starsEarned,
    timeout: false,
    productive: false
  });

  if (isCorrect) {
    feedbackText.textContent = `Correct! ${q.explain} / 回答正确`;
  } else if (!feedbackText.textContent) {
    feedbackText.textContent = `Not this one. ${q.explain} / 再试下一题`;
  }

  nextBtn.classList.remove("hidden");
}

function renderListeningControls(q) {
  const box = document.createElement("div");
  box.className = "listen-box";
  box.innerHTML = `
    <p class='hint'>Each audio will play twice. 每段音频播放两次。</p>
    <p id='listenStatus' class='hint'>Ready / 准备好</p>
    <div class='summary-actions'>
      <button type='button' class='btn btn-secondary' id='listenPlayBtn'>▶ Play / 播放</button>
      <button type='button' class='btn btn-secondary' id='listenPauseBtn'>⏸ Stop / 停止</button>
    </div>
  `;
  interactionWrap.appendChild(box);

  const status = box.querySelector("#listenStatus");
  const playBtn = box.querySelector("#listenPlayBtn");
  const pauseBtn = box.querySelector("#listenPauseBtn");

  listeningPlayCount = 0;
  playBtn.addEventListener("click", () => {
    if (listeningPlayCount >= 2) {
      status.textContent = "Played twice already. 已播放两次";
      return;
    }
    listeningPlayCount += 1;
    status.textContent = `Playing ${listeningPlayCount}/2... / 正在播放第${listeningPlayCount}遍`;
    readAloud(q.listenText || q.prompt);
  });

  pauseBtn.addEventListener("click", () => {
    window.speechSynthesis?.cancel();
    status.textContent = `Paused. Played ${listeningPlayCount}/2 / 已暂停`;
  });
}

function renderProductiveControls(q) {
  const box = document.createElement("div");
  box.className = "productive-box";

  if (q.type === "speaking") {
    const rubricHtml = (q.rubric || []).map((item, idx) => {
      return `<label class='toggle-row'><input type='radio' name='rubric' value='${escapeHtml(item)}' ${idx === 1 ? "" : ""}> <span>${escapeHtml(item)}</span></label>`;
    }).join("");

    box.innerHTML = `
      <p class='hint'>Read aloud, then choose self-check level. 先朗读，再选择自评等级。</p>
      <div class='summary-actions'>
        <button type='button' class='btn btn-secondary' id='speakReadBtn'>🔊 Read Prompt / 朗读题目</button>
      </div>
      <div class='rubric-wrap'>${rubricHtml}</div>
      <button type='button' class='btn btn-primary' id='submitProductiveBtn'>Submit / 提交</button>
    `;

    interactionWrap.appendChild(box);
    box.querySelector("#speakReadBtn").addEventListener("click", () => readAloud(q.prompt));
    box.querySelector("#submitProductiveBtn").addEventListener("click", submitProductiveAnswer);
    return;
  }

  const topic = (q.keywords || []).map((item) => `<span class='badge'>${escapeHtml(item)}</span>`).join(" ");
  box.innerHTML = `
    <p class='hint'>Try your best! 加油，你可以的！</p>
    <p class='hint'>Topic: ${topic}</p>
    <textarea id='productiveText' rows='6' placeholder='Write here... / 在这里作答'></textarea>
    <p id='productiveCounter' class='hint'>0 sentence</p>
    <div class='summary-actions'>
      <button type='button' class='btn btn-secondary' id='clearProductiveBtn'>🗑 Clear / 清空</button>
      <button type='button' class='btn btn-primary' id='submitProductiveBtn'>Submit / 提交</button>
    </div>
  `;

  interactionWrap.appendChild(box);
  const text = box.querySelector("#productiveText");
  const counter = box.querySelector("#productiveCounter");

  text.addEventListener("input", () => {
    const count = text.value.split(/[.!?]+/).map((v) => v.trim()).filter(Boolean).length;
    counter.textContent = `${count} sentence(s) / ${count}句`;
  });

  box.querySelector("#clearProductiveBtn").addEventListener("click", () => {
    const ok = window.confirm("Clear your answer? / 确定清空内容吗？");
    if (!ok) {
      return;
    }
    text.value = "";
    counter.textContent = "0 sentence / 0句";
  });

  box.querySelector("#submitProductiveBtn").addEventListener("click", submitProductiveAnswer);
}

function renderQuestion() {
  const q = questionBank[state.index];
  const total = questionBank.length;

  levelBadge.textContent = q.level;
  cefrTag.textContent = `CEFR: ${q.cefr}`;
  skillTag.textContent = `Skill: ${q.skill}`;
  progressText.textContent = `Question ${state.index + 1} / ${total}`;
  progressFill.style.width = `${((state.index + 1) / total) * 100}%`;
  storyCue.textContent = q.story;
  questionText.textContent = `${q.prompt} ${q.promptZh ? `(${q.promptZh})` : ""}`;
  feedbackText.textContent = "";
  nextBtn.classList.add("hidden");
  state.questionLocked = false;

  levelBanner.textContent = `${q.level} stage. Focus and enjoy. / ${q.level}阶段，认真答题，轻松完成。`;
  levelBanner.classList.remove("hidden");

  renderQuestionImage(q);

  optionsWrap.innerHTML = "";
  interactionWrap.innerHTML = "";
  interactionWrap.classList.add("hidden");

  if (q.type === "mcq" || q.type === "listening") {
    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.className = "btn option-btn";
      btn.type = "button";
      btn.textContent = option;
      btn.addEventListener("click", () => answerQuestion(option, btn));
      optionsWrap.appendChild(btn);
    });
  }

  if (q.type === "listening") {
    interactionWrap.classList.remove("hidden");
    renderListeningControls(q);
  }

  if (isProductiveTask(q)) {
    interactionWrap.classList.remove("hidden");
    renderProductiveControls(q);
  }

  startQuestionTimer();
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
    badges.push("Golden Owl");
  }
  if ((report.stars || 0) >= 140) {
    badges.push("Star Collector");
  }
  if ((report.bestStreak || 0) >= 4) {
    badges.push("Combo Hero");
  }
  if ((report.timeouts || 0) === 0 && report.timedMode) {
    badges.push("Time Master");
  }
  if ((report.correct || 0) >= 9) {
    badges.push("KET Champion");
  }
  if (!badges.length) {
    badges.push("Brave Starter");
  }

  return badges;
}

function calcProficiency(report) {
  const byBand = {
    "ABC Gate": { total: 0, correct: 0 },
    Phonics: { total: 0, correct: 0 },
    KET: { total: 0, correct: 0 }
  };

  report.answers.forEach((a) => {
    byBand[a.level].total += 1;
    if (a.correct) {
      byBand[a.level].correct += 1;
    }
  });

  const abcRate = byBand["ABC Gate"].correct / Math.max(byBand["ABC Gate"].total, 1);
  const phonicsRate = byBand.Phonics.correct / Math.max(byBand.Phonics.total, 1);
  const ketRate = byBand.KET.correct / Math.max(byBand.KET.total, 1);

  if (ketRate >= 0.66 && report.accuracy >= 75) {
    return {
      label: "KET Ready (A2)",
      advice: "Strong KET readiness. Keep listening + short writing weekly. / 已接近KET达标，继续听力和短文训练。",
      byBand,
      zpd: "A2 consolidation -> A2+ reading fluency"
    };
  }

  if (phonicsRate >= 0.66 && report.accuracy >= 55) {
    return {
      label: "Phonics to KET Bridge (A1-A2)",
      advice: "Good bridge stage. Build grammar control and sentence output. / 正在从自然拼读过渡到KET。",
      byBand,
      zpd: "A1 sentence control -> A2 grammar transfer"
    };
  }

  return {
    label: "ABC Foundation (Pre-A1-A1)",
    advice: "Focus on core vocabulary, phonics chunks, and simple speaking. / 建议继续夯实词汇和发音。",
    byBand,
    zpd: "Pre-A1 word recognition -> A1 simple production"
  };
}

function estimateVocabulary(report) {
  const base = report.entryGate === "KET" ? 420 : report.entryGate === "Phonics" ? 260 : 140;
  const gain = report.correct * 26;
  const productiveBonus = report.answers.filter((a) => a.productive && a.correct).length * 24;
  return base + gain + productiveBonus;
}

function buildGrowthTrends(report) {
  const listeningCorrect = report.answers.filter((a) => a.skill === "Listening" && a.correct).length;
  const writingCorrect = report.answers.filter((a) => a.skill === "Writing" && a.correct).length;
  const speakingCorrect = report.answers.filter((a) => a.skill === "Speaking" && a.correct).length;

  const trends = [];
  trends.push(`Listening trend: ${listeningCorrect >= 1 ? "stable" : "emerging"} (need 2 focused practices/week).`);
  trends.push(`Output trend: writing ${writingCorrect >= 1 ? "developing" : "early"}, speaking ${speakingCorrect >= 1 ? "active" : "warming up"}.`);
  trends.push(`Within ZPD, recommend next 6 weeks: 2 reading drills + 2 oral tasks each week.`);
  return trends;
}

function buildScaffolder(report) {
  const parent = [
    "Daily 10-minute read-aloud with one follow-up question. / 每天10分钟亲子朗读并提1个问题。",
    "Use home labels (door, table, book) for vocabulary recall. / 家庭物品英文标签复现词汇。",
    "Weekly mini speaking clip (30s) to track confidence. / 每周录30秒口语观察变化。"
  ];

  const teacher = [
    `Group by level: ${report.proficiency}. Keep tasks inside ZPD. / 按语言发展区分层布置任务。`,
    "Listening task: play twice only, then immediate answer check. / 听力坚持两遍播放规则。",
    "Writing feedback: focus on sentence completeness before advanced grammar. / 写作先保完整句，再讲复杂语法。"
  ];

  const student = [
    "I can listen two times and choose quickly. / 我可以听两遍后快速选择。",
    "I can write 3 clear sentences with full stops. / 我可以写3个完整句子。",
    "I can read aloud every day for 5 minutes. / 我每天可以朗读5分钟。"
  ];

  return { parent, teacher, student };
}

function finishQuiz() {
  clearQuestionTimer();
  const total = questionBank.length;
  const accuracy = Math.round((state.correct / total) * 100);
  const baseReport = {
    studentName: state.studentName,
    studentClass: state.studentClass,
    entryGate: state.entryGate,
    materials: state.materials,
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
  const vocabEstimate = estimateVocabulary(baseReport);
  const trends = buildGrowthTrends(baseReport);
  const scaffolder = buildScaffolder({ ...baseReport, proficiency: levelResult.label });

  const report = {
    ...baseReport,
    proficiency: levelResult.label,
    advice: levelResult.advice,
    levelStats: levelResult.byBand,
    zpd: levelResult.zpd,
    vocabEstimate,
    growthTrends: trends,
    scaffolder,
    badges: calcBadges(baseReport)
  };

  state.finishedReport = report;
  saveReport(report);
  playVictorySound();
  renderSummary(report);
  renderHistoryTable();
  renderTeacherOverview();
}

function fillList(listElement, items) {
  listElement.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
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
  vocabPredict.textContent = `${report.vocabEstimate} words`;
  zpdTag.textContent = report.zpd;
  summaryAdvice.textContent = report.advice;
  feasibilityIntro.textContent = `Feasibility: ${report.studentName} is currently at ${report.proficiency}, entry gate ${report.entryGate}, materials ${report.materials.join(", ") || "none"}.`;

  fillList(growthTrendList, report.growthTrends || []);
  fillList(parentScaffold, report.scaffolder?.parent || []);
  fillList(teacherScaffold, report.scaffolder?.teacher || []);
  fillList(studentScaffold, report.scaffolder?.student || []);

  badgeWallList.innerHTML = "";
  (report.badges || ["Brave Starter"]).forEach((badge) => {
    const li = document.createElement("li");
    li.className = "badge-chip";
    li.textContent = badge;
    badgeWallList.appendChild(li);
  });

  summaryCard.classList.remove("summary-celebrate");
  void summaryCard.offsetWidth;
  summaryCard.classList.add("summary-celebrate");
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
    .map(([cls, data]) => ({ cls, count: data.total, avg: Math.round(data.accuracy / data.total) }))
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
        const key = ans.skill || ans.prompt;
        weakMap[key] = (weakMap[key] || 0) + 1;
      }
    });
  });

  const weakItems = Object.entries(weakMap).sort((a, b) => b[1] - a[1]).slice(0, 5);

  weakPointsList.innerHTML = "";
  if (!weakItems.length) {
    weakPointsList.innerHTML = "<li>No frequent weak points yet.</li>";
    return;
  }

  weakItems.forEach(([name, count]) => {
    const li = document.createElement("li");
    li.textContent = `${name} (${count} mistakes)`;
    weakPointsList.appendChild(li);
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
    alert("Please finish one student test first. / 请先完成一次测试");
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
    alert("No report data to export yet. / 暂无可导出数据");
    return;
  }

  const header = [
    "studentName",
    "studentClass",
    "entryGate",
    "materials",
    "correct",
    "total",
    "accuracy",
    "stars",
    "bestStreak",
    "timedMode",
    "timeouts",
    "badges",
    "proficiency",
    "zpd",
    "vocabEstimate",
    "finishedAt"
  ];

  const rows = reports.map((r) => [
    r.studentName,
    r.studentClass || "",
    r.entryGate || "",
    (r.materials || []).join(" | "),
    r.correct,
    r.total,
    `${r.accuracy}%`,
    r.stars ?? 0,
    r.bestStreak ?? 0,
    r.timedMode ? "yes" : "no",
    r.timeouts ?? 0,
    (r.badges || []).join(" | "),
    r.proficiency,
    r.zpd || "",
    r.vocabEstimate || 0,
    r.finishedAt
  ]);

  const csv = [header.join(","), ...rows.map((row) => row.map(toCsvValue).join(","))].join("\n");
  downloadFile("lynn_kids_garden_reports.csv", csv, "text/csv;charset=utf-8");
}

function clearAllStudentData() {
  const confirmed = window.confirm("Clear all saved student reports? / 确定清空全部学生数据吗？");
  if (!confirmed) {
    clearDataMsg.textContent = "Clear cancelled. / 已取消";
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state.finishedReport = null;
  renderHistoryTable();
  renderTeacherOverview();
  clearDataMsg.textContent = "All student data has been cleared. / 已清空全部数据";
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