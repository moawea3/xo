// script.js

let emojis = ["🍎", "🍌", "🍉", "🍓", "🍍", "🍔", "🍕", "🍟", "🍦", "🍩"];
let words = ["تفاحة", "موز", "بطيخ", "توت", "أناناس", "برجر", "بيتزا", "بطاطس", "آيس كريم", "دونات"];
let timer = 60;
let gameTimer;
let emojiContainer = document.getElementById("emoji-container");
let wordContainer = document.getElementById("word-container");
let startBtn = document.getElementById("start-btn");
let timerDisplay = document.getElementById("timer");
let matchedPairs = 0;

// وظيفة لبدء اللعبة
startBtn.addEventListener("click", startGame);

function startGame() {
  // إعادة تعيين اللعبة
  matchedPairs = 0;
  timer = 60;
  timerDisplay.textContent = timer;
  emojiContainer.innerHTML = '';
  wordContainer.innerHTML = '';
  startBtn.disabled = true;
  
  // خلط الإيموجي والكلمات
  shuffle(emojis);
  shuffle(words);
  
  // إنشاء الإيموجي
  emojis.forEach((emoji, index) => {
    let emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.textContent = emoji;
    emojiElement.setAttribute("draggable", true);
    emojiElement.setAttribute("data-index", index);
    emojiElement.addEventListener("dragstart", dragStart);
    emojiContainer.appendChild(emojiElement);
  });
  
  // إنشاء الكلمات
  words.forEach((word, index) => {
    let wordElement = document.createElement("div");
    wordElement.classList.add("word");
    wordElement.textContent = word;
    wordElement.setAttribute("data-index", index);
    wordElement.addEventListener("dragover", dragOver);
    wordElement.addEventListener("drop", drop);
    wordContainer.appendChild(wordElement);
  });
  
  // بدء المؤقت
  gameTimer = setInterval(countdown, 1000);
}

// عد تنازلي للمؤقت
function countdown() {
  if (timer > 0) {
    timer--;
    timerDisplay.textContent = timer;
  } else {
    clearInterval(gameTimer);
    alert("لقد انتهى الوقت! خسرت اللعبة.");
    startBtn.disabled = false;
  }
}

// دالة لتغيير ترتيب العناصر
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// دالة لسحب الإيموجي
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.dataset.index);
}

// دالة للسحب إلى الكلمة
function dragOver(event) {
  event.preventDefault();
}

// دالة لوضع الإيموجي على الكلمة
function drop(event) {
  let emojiIndex = event.dataTransfer.getData("text");
  let wordIndex = event.target.dataset.index;

  if (emojis[emojiIndex] === words[wordIndex]) {
    // إضافة الكلاس "matched" لتغيير اللون وترتيب العناصر
    event.target.textContent = words[wordIndex];
    let emojiElement = document.querySelector(.emoji[data-index='${emojiIndex}']);
    emojiElement.classList.add("matched");
    event.target.classList.add("matched");
    emojiElement.textContent = emojis[emojiIndex];
    emojiElement.style.marginBottom = "5px";  // التباعد بين الإيموجي والكلمة
    
    matchedPairs++;
    if (matchedPairs === 10) {
      clearInterval(gameTimer);
      alert("لقد فزت! اللعبة انتهت.");
      startBtn.disabled = false;
    }
  }
}
