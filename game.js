/* Sentence Hero: lesson expressions are adapted into original game questions. */
const UNITS = [
  { title: "How Are You?", topic: "인사와 안부", cards: [
    { en: "I'm great.", ko: "아주 좋아요.", blank: "I'm ___.", answer: "great", picture: { type: "emoji", value: "🤩" } },
    { en: "I'm good.", ko: "좋아요.", blank: "I'm ___.", answer: "good", picture: { type: "emoji", value: "🙂" } },
    { en: "Not bad.", ko: "나쁘지 않아요.", blank: "Not ___.", answer: "bad", picture: { type: "emoji", value: "😌" } },
    { en: "Not so good.", ko: "별로 좋지 않아요.", blank: "Not ___ good.", answer: "so", picture: { type: "emoji", value: "😟" } }
  ]},
  { title: "This Is My Friend", topic: "사람 소개", cards: [
    { en: "This is my friend.", ko: "이 사람은 내 친구예요.", blank: "This is my ___.", answer: "friend", picture: { type: "emoji", value: "👧🏽🤝👧🏻" } },
    { en: "This is my father.", ko: "이 사람은 우리 아빠예요.", blank: "This is my ___.", answer: "father", picture: { type: "emoji", value: "👨‍👧" } },
    { en: "This is my mother.", ko: "이 사람은 우리 엄마예요.", blank: "This is my ___.", answer: "mother", picture: { type: "emoji", value: "👩‍👧" } },
    { en: "This is my teacher.", ko: "이 사람은 우리 선생님이에요.", blank: "This is my ___.", answer: "teacher", picture: { type: "emoji", value: "👩‍🏫" } }
  ]},
  { title: "Don't Push", topic: "금지와 지시", cards: [
    { en: "Don't push.", ko: "밀지 마세요.", blank: "Don't ___.", answer: "push", picture: { type: "emoji", value: "🚫🫷" } },
    { en: "Don't run.", ko: "뛰지 마세요.", blank: "Don't ___.", answer: "run", picture: { type: "emoji", value: "🚫🏃" } },
    { en: "Don't eat.", ko: "먹지 마세요.", blank: "Don't ___.", answer: "eat", picture: { type: "emoji", value: "🚫🍔" } },
    { en: "Don't touch.", ko: "만지지 마세요.", blank: "Don't ___.", answer: "touch", picture: { type: "emoji", value: "🚫👆" } }
  ]},
  { title: "I'm Happy", topic: "감정과 상태", cards: [
    { en: "I'm happy.", ko: "나는 행복해요.", blank: "I'm ___.", answer: "happy", picture: { type: "emoji", value: "😄" } },
    { en: "I'm sad.", ko: "나는 슬퍼요.", blank: "I'm ___.", answer: "sad", picture: { type: "emoji", value: "😢" } },
    { en: "I'm hungry.", ko: "나는 배가 고파요.", blank: "I'm ___.", answer: "hungry", picture: { type: "emoji", value: "😋🍽️" } },
    { en: "I'm tired.", ko: "나는 피곤해요.", blank: "I'm ___.", answer: "tired", picture: { type: "emoji", value: "😴" } }
  ]},
  { title: "What Time Is It?", topic: "시각과 일과", cards: [
    { en: "It's seven o'clock.", ko: "7시예요.", blank: "It's ___ o'clock.", answer: "seven", picture: { type: "emoji", value: "🕖" } },
    { en: "It's eight o'clock.", ko: "8시예요.", blank: "It's ___ o'clock.", answer: "eight", picture: { type: "emoji", value: "🕗" } },
    { en: "It's twelve o'clock.", ko: "12시예요.", blank: "It's ___ o'clock.", answer: "twelve", picture: { type: "emoji", value: "🕛" } },
    { en: "It's ten o'clock.", ko: "10시예요.", blank: "It's ___ o'clock.", answer: "ten", picture: { type: "emoji", value: "🕙" } }
  ]},
  { title: "Is This Your Cap?", topic: "물건의 주인", cards: [
    { en: "Is this your cap?", ko: "이것은 네 모자니?", blank: "Is this your ___?", answer: "cap", picture: { type: "emoji", value: "🧢" } },
    { en: "Is this your jacket?", ko: "이것은 네 재킷이니?", blank: "Is this your ___?", answer: "jacket", picture: { type: "emoji", value: "🧥" } },
    { en: "Is this your watch?", ko: "이것은 네 시계니?", blank: "Is this your ___?", answer: "watch", picture: { type: "emoji", value: "⌚" } },
    { en: "Is this your umbrella?", ko: "이것은 네 우산이니?", blank: "Is this your ___?", answer: "umbrella", picture: { type: "emoji", value: "☂️" } }
  ]},
  { title: "What Day Is It Today?", topic: "요일", cards: [
    { en: "It's Monday.", ko: "월요일이에요.", blank: "It's ___.", answer: "Monday", picture: { type: "calendar", value: "MON" } },
    { en: "It's Tuesday.", ko: "화요일이에요.", blank: "It's ___.", answer: "Tuesday", picture: { type: "calendar", value: "TUE" } },
    { en: "It's Friday.", ko: "금요일이에요.", blank: "It's ___.", answer: "Friday", picture: { type: "calendar", value: "FRI" } },
    { en: "It's Saturday.", ko: "토요일이에요.", blank: "It's ___.", answer: "Saturday", picture: { type: "calendar", value: "SAT" } }
  ]},
  { title: "Let's Play Badminton", topic: "운동 제안", cards: [
    { en: "Let's play badminton.", ko: "배드민턴을 치자.", blank: "Let's play ___.", answer: "badminton", picture: { type: "emoji", value: "🏸" } },
    { en: "Let's play soccer.", ko: "축구를 하자.", blank: "Let's play ___.", answer: "soccer", picture: { type: "emoji", value: "⚽" } },
    { en: "Let's play basketball.", ko: "농구를 하자.", blank: "Let's play ___.", answer: "basketball", picture: { type: "emoji", value: "🏀" } },
    { en: "Let's play baseball.", ko: "야구를 하자.", blank: "Let's play ___.", answer: "baseball", picture: { type: "emoji", value: "⚾" } }
  ]},
  { title: "How Much Is It?", topic: "가격", cards: [
    { en: "It's five hundred won.", ko: "500원이에요.", blank: "It's ___ hundred won.", answer: "five", picture: { type: "price", item: "🧣", value: "₩500" } },
    { en: "It's seven hundred won.", ko: "700원이에요.", blank: "It's ___ hundred won.", answer: "seven", picture: { type: "price", item: "👕", value: "₩700" } },
    { en: "It's nine hundred won.", ko: "900원이에요.", blank: "It's ___ hundred won.", answer: "nine", picture: { type: "price", item: "🚗", value: "₩900" } },
    { en: "It's four thousand won.", ko: "4,000원이에요.", blank: "It's ___ thousand won.", answer: "four", picture: { type: "price", item: "🧥", value: "₩4,000" } }
  ]},
  { title: "It's in the Box", topic: "물건의 위치", cards: [
    { en: "The book is in the box.", ko: "책이 상자 안에 있어요.", blank: "The book is in the ___.", answer: "box", picture: { type: "location", place: "box", position: "in", object: "📕" } },
    { en: "The cap is on the desk.", ko: "모자가 책상 위에 있어요.", blank: "The cap is on the ___.", answer: "desk", picture: { type: "location", place: "desk", position: "on", object: "🧢" } },
    { en: "The ball is under the table.", ko: "공이 탁자 아래에 있어요.", blank: "The ball is under the ___.", answer: "table", picture: { type: "location", place: "table", position: "under", object: "⚽" } },
    { en: "The pencil is in the bag.", ko: "연필이 가방 안에 있어요.", blank: "The pencil is in the ___.", answer: "bag", picture: { type: "location", place: "bag", position: "in", object: "✏️" } }
  ]},
  { title: "What Are You Doing?", topic: "지금 하는 일", cards: [
    { en: "I'm cooking.", ko: "나는 요리하고 있어요.", blank: "I'm ___.", answer: "cooking", picture: { type: "emoji", value: "👩‍🍳" } },
    { en: "I'm reading a book.", ko: "나는 책을 읽고 있어요.", blank: "I'm ___ a book.", answer: "reading", picture: { type: "emoji", value: "📖" } },
    { en: "I'm drawing a picture.", ko: "나는 그림을 그리고 있어요.", blank: "I'm ___ a picture.", answer: "drawing", picture: { type: "emoji", value: "🎨" } },
    { en: "I'm cleaning the room.", ko: "나는 방을 청소하고 있어요.", blank: "I'm ___ the room.", answer: "cleaning", picture: { type: "emoji", value: "🧹" } }
  ]}
];

const QUESTION_SEQUENCE = [
  ["meaning", 0], ["meaning", 1], ["picture", 0], ["choice", 0],
  ["picture", 1], ["picture", 2], ["choice", 1], ["short", 2],
  ["meaning", 3], ["short", 3],
  ["meaning", 2], ["short", 1], ["picture", 3]
];
const STORAGE_KEY = "sentence-hero-progress-v1";
const DEFAULT_STATE = () => ({ unit: 0, unlocked: 1, positions: Array(11).fill(0), completed: [], stars: 0, rewarded: {}, attempts: {}, monsterHp: 80, bossScore: 0 });
const $ = (id) => document.getElementById(id);
let state = loadState();
let currentOptions = [];
let answerLocked = false;
let nextAction = null;
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.positions) || saved.positions.length !== UNITS.length) return DEFAULT_STATE();
    return { ...DEFAULT_STATE(), ...saved, unit: Math.max(0, Math.min(UNITS.length - 1, Number(saved.unit) || 0)), unlocked: Math.max(1, Math.min(UNITS.length, Number(saved.unlocked) || 1)) };
  } catch { return DEFAULT_STATE(); }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  $("saveStatus").textContent = "이 기기에 진도 저장됨";
}
function questionAt(unitIndex, position) {
  const [type, cardIndex] = QUESTION_SEQUENCE[position];
  return { id: `${unitIndex + 1}-${position + 1}`, type, cardIndex, card: UNITS[unitIndex].cards[cardIndex], boss: position >= 10 };
}
function shuffledOptions(values, seed) {
  const list = [...values];
  let value = [...seed].reduce((total, char) => total * 31 + char.charCodeAt(0), 7) >>> 0;
  for (let i = list.length - 1; i > 0; i--) {
    value = (1664525 * value + 1013904223) >>> 0;
    const j = value % (i + 1);
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
function renderUnitList() {
  const list = $("unitList");
  list.replaceChildren();
  UNITS.forEach((unit, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `unit-button${state.unit === index ? " active" : ""}`;
    button.disabled = index >= state.unlocked;
    button.setAttribute("aria-current", state.unit === index ? "step" : "false");
    const status = state.completed.includes(index) ? "✓" : index >= state.unlocked ? "🔒" : "→";
    button.innerHTML = `<span class="unit-number">${index + 1}</span><span class="unit-copy"><strong>${unit.title}</strong><small>${unit.topic}</small></span><span class="unit-status" aria-hidden="true">${status}</span>`;
    button.addEventListener("click", () => { state.unit = index; saveState(); render(); });
    list.appendChild(button);
  });
  $("unlockedCount").textContent = `${state.unlocked}단원 열림`;
  $("completionCount").textContent = `완료한 단원 ${state.completed.length} / 11`;
}
function renderPicture(picture) {
  const wrap = $("pictureWrap");
  wrap.replaceChildren();
  if (!picture) { wrap.hidden = true; return; }
  wrap.hidden = false;
  if (picture.type === "emoji") {
    const art = document.createElement("span"); art.className = "emoji-picture"; art.textContent = picture.value; wrap.appendChild(art);
  } else if (picture.type === "calendar") {
    const card = document.createElement("div"); card.className = "calendar-picture";
    card.innerHTML = `<small>THIS WEEK</small><strong>${picture.value}</strong>`; wrap.appendChild(card);
  } else if (picture.type === "price") {
    const card = document.createElement("div"); card.className = "price-picture";
    const item = document.createElement("small"); item.textContent = picture.item;
    const amount = document.createElement("strong"); amount.textContent = picture.value;
    card.append(item, amount); wrap.appendChild(card);
  } else if (picture.type === "location") {
    const card = document.createElement("div"); card.className = "location-picture";
    const place = document.createElement("span"); place.className = `location-furniture ${picture.place}`;
    place.textContent = ({ box: "📦", desk: "🗄️", table: "🪑", bag: "🎒" })[picture.place];
    const object = document.createElement("span"); object.className = `location-object ${picture.position}`; object.textContent = picture.object;
    card.append(place, object); wrap.appendChild(card);
  }
}
function render() {
  const unit = UNITS[state.unit];
  const position = Math.max(0, Math.min(13, Number(state.positions[state.unit]) || 0));
  state.positions[state.unit] = position;
  renderUnitList();
  $("starCount").textContent = state.stars;
  $("unitTitle").textContent = `${state.unit + 1}. ${unit.title}`;
  $("monsterLabel").textContent = `${unit.topic} 몬스터`;
  $("healthFill").style.width = `${state.monsterHp}%`;
  $("healthText").textContent = `${state.monsterHp} / 100`;
  $("learningProgress").style.width = `${Math.round(Math.min(position, 13) / 13 * 100)}%`;
  $("battleStep").textContent = position < 10 ? `학습 ${position + 1} / 10` : position < 13 ? `단원 보스 ${position - 9} / 3` : "단원 완료";
  $("feedback").hidden = true; $("nextButton").hidden = true; answerLocked = false; nextAction = null;
  const area = $("answerArea"); area.replaceChildren();
  if (position >= 13) {
    renderPicture({ type: "emoji", value: "🏆" });
    $("questionType").textContent = "단원 완료";
    $("questionHeading").textContent = "멋지게 해냈어요!";
    $("questionHint").textContent = "다음 단원을 골라 새로운 문장을 만나 보세요.";
    $("questionText").textContent = "Great job!";
    $("listenButton").hidden = true;
    return;
  }
  const question = questionAt(state.unit, position);
  const { card, type } = question;
  $("listenButton").hidden = false;
  const title = ({ meaning: "문장 보고 의미 선택하기", choice: "빈칸에 알맞은 단어 고르기", short: "빈칸에 알맞은 단어 쓰기", picture: "그림과 일치하는 문장 찾기" })[type];
  $("questionType").textContent = question.boss ? `단원 보스 · ${title}` : title;
  $("questionHeading").textContent = ({ meaning: "이 문장의 뜻은 무엇일까요?", choice: "빈칸에 들어갈 단어는?", short: "영어 단어 하나를 써 보세요.", picture: "그림을 보고 맞는 문장을 고르세요." })[type];
  $("questionHint").textContent = type === "short" || type === "choice" ? `뜻: ${card.ko}` : type === "picture" ? "그림의 모습·숫자·위치를 잘 살펴보세요." : "영어 문장을 천천히 읽어 보세요.";
  $("questionText").textContent = type === "meaning" ? card.en : type === "picture" ? "" : card.blank;
  renderPicture(type === "picture" ? card.picture : null);
  if (type === "short") {
    const form = document.createElement("form"); form.className = "short-form";
    const input = document.createElement("input"); input.type = "text"; input.autocomplete = "off"; input.spellcheck = false; input.setAttribute("aria-label", "빈칸에 들어갈 영어 단어"); input.maxLength = 30; input.placeholder = "영어 단어 입력";
    const submit = document.createElement("button"); submit.type = "submit"; submit.textContent = "확인";
    form.append(input, submit); form.addEventListener("submit", (event) => { event.preventDefault(); answer(input.value, [input, submit]); }); area.appendChild(form); input.focus();
  } else {
    const values = unit.cards.map(item => type === "meaning" ? item.ko : type === "picture" ? item.en : item.answer);
    currentOptions = shuffledOptions(values, question.id + type);
    const retries = state.attempts[question.id] || 0;
    if (retries > 0) {
      const shift = retries % currentOptions.length;
      currentOptions = currentOptions.slice(shift).concat(currentOptions.slice(0, shift));
    }
    currentOptions.forEach((value) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "choice"; button.textContent = value;
      button.addEventListener("click", () => answer(value, [button])); area.appendChild(button);
    });
  }
}
function normalizeAnswer(value) { return String(value).normalize("NFKC").trim().toLocaleLowerCase("en-US").replace(/\s+/g, " "); }
function answer(value, chosenControls) {
  if (answerLocked) return;
  const position = state.positions[state.unit];
  const question = questionAt(state.unit, position);
  const correctValue = question.type === "meaning" ? question.card.ko : question.type === "picture" ? question.card.en : question.card.answer;
  if (!normalizeAnswer(value)) { toast("영어 단어를 입력해 주세요."); return; }
  const correct = normalizeAnswer(value) === normalizeAnswer(correctValue);
  answerLocked = true;
  state.attempts[question.id] = (state.attempts[question.id] || 0) + 1;
  document.querySelectorAll(".choice").forEach(button => { button.disabled = true; if (correct && normalizeAnswer(button.textContent) === normalizeAnswer(correctValue)) button.classList.add("correct"); });
  chosenControls.forEach(control => { control.disabled = true; if (control.classList.contains("choice")) control.classList.add(correct ? "correct" : "wrong"); });
  const feedback = $("feedback"); feedback.hidden = false; feedback.className = `feedback ${correct ? "good" : "bad"}`;
  if (!correct) state.monsterHp = Math.min(100, state.monsterHp + 15);
  const hint = question.type === "picture" ? "그림의 모양·숫자·위치를 다시 살펴보세요." : question.type === "meaning" ? "영어 문장의 핵심 단어를 다시 읽어 보세요." : "문장의 뜻과 빈칸 앞뒤를 다시 살펴보세요.";
  feedback.textContent = correct ? `정답이에요! ${question.card.en} — ${question.card.ko}` : `아쉬워요. 몬스터가 체력을 15 회복했어요. ${hint}`;
  const next = $("nextButton"); next.hidden = false;
  if (correct) {
    if (!state.rewarded[question.id]) {
      state.rewarded[question.id] = true;
      state.stars += question.boss ? 35 : 20;
      state.monsterHp = Math.max(0, state.monsterHp - 25);
      if (state.monsterHp === 0) { state.monsterHp = 100; toast("몬스터를 물리쳤어요! ✨"); }
    }
    if (question.boss) state.bossScore += 1;
    next.textContent = position === 12 ? "결과 확인 →" : "다음 문제 →";
    nextAction = advance;
  } else if (question.boss) {
    next.textContent = position === 12 ? "결과 확인 →" : "다음 보스 문제 →";
    nextAction = advance;
  } else {
    next.textContent = "다시 풀기 ↻";
    nextAction = render;
  }
  saveState();
  $("starCount").textContent = state.stars;
  $("healthFill").style.width = `${state.monsterHp}%`;
  $("healthText").textContent = `${state.monsterHp} / 100`;
}
function advance() {
  const position = state.positions[state.unit];
  if (position === 12) {
    if (state.bossScore >= 2) {
      state.positions[state.unit] = 13;
      if (!state.completed.includes(state.unit)) state.completed.push(state.unit);
      state.unlocked = Math.max(state.unlocked, Math.min(UNITS.length, state.unit + 2));
      toast("단원 보스 통과! 다음 단원이 열렸어요. 🏆");
    } else {
      state.positions[state.unit] = 10;
      toast("보스 문제를 복습하고 다시 도전해요.");
    }
    state.bossScore = 0;
  } else {
    state.positions[state.unit] += 1;
    if (position === 9) state.bossScore = 0;
  }
  saveState(); render();
}
function listen() {
  if (!("speechSynthesis" in window)) { toast("이 브라우저에서는 음성 듣기를 사용할 수 없어요."); return; }
  const position = state.positions[state.unit];
  if (position >= 13) return;
  const question = questionAt(state.unit, position);
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(question.card.en);
  utterance.lang = "en-US"; utterance.rate = 0.82;
  speechSynthesis.speak(utterance);
}
function toast(message) {
  const element = $("toast"); element.textContent = message; element.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { element.hidden = true; }, 3100);
}
$("nextButton").addEventListener("click", () => { if (nextAction) nextAction(); });
$("listenButton").addEventListener("click", listen);
$("resetButton").addEventListener("click", () => { if (confirm("이 브라우저에 저장된 모든 단원 진도와 별을 지울까요?")) { state = DEFAULT_STATE(); saveState(); render(); } });
render();
