// الأسئلة المختلفة
const allQuestions = [
    { question: "ما هي عاصمة الجزائر؟", options: ["الجزائر", "وهران", "قسنطينة", "عنابة"], correct: 0 },
    { question: "ما هو الكوكب الذي يسمى بالكوكب الأحمر؟", options: ["المريخ", "عطارد", "الزهرة", "الأرض"], correct: 0 },
    { question: "من هو مكتشف قانون الجاذبية؟", options: ["نيوتن", "أينشتاين", "غاليلو", "كوبرنيكوس"], correct: 0 },
    { question: "كم عدد ألوان قوس قزح؟", options: ["7", "6", "8", "9"], correct: 0 },
    { question: "ما هي أكبر قارة في العالم؟", options: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الجنوبية"], correct: 0 },
    { question: "في أي سنة بدأت الحرب العالمية الثانية؟", options: ["1939", "1941", "1914", "1945"], correct: 0 },
    { question: "كم عدد أضلاع المثلث؟", options: ["3", "4", "5", "6"], correct: 0 },
    { question: "ما هو العنصر الكيميائي الذي يرمز له بـO؟", options: ["الأكسجين", "الهيدروجين", "الحديد", "النيتروجين"], correct: 0 },
    { question: "كم دقيقة في الساعة؟", options: ["60", "50", "45", "30"], correct: 0 },
    { question: "ما هو الحيوان الذي يُطلق عليه ملك الغابة؟", options: ["الأسد", "النمر", "الفيل", "الدب"], correct: 0 },
];

let selectedQuestions = [];
let playerName = "";
let score = 0;
let currentQuestionIndex = 0;
let timer;
let timeLeft = 20;

function startGame() {
    playerName = document.getElementById("player-name").value;
    if (!playerName) {
        alert("الرجاء إدخال اسمك!");
        return;
    }

    // اختيار 5 أسئلة عشوائية
    selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("name-display").textContent = playerName;

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").classList.add("hidden");
    timeLeft = 20;
}

function checkAnswer(selected) {
    const questionData = selectedQuestions[currentQuestionIndex];

    if (selected === questionData.correct) {
        score += 3;
        alert("إجابة صحيحة! ✔");
    } else {
        alert("إجابة خاطئة! ❌");
    }

    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").classList.remove("hidden");
    clearInterval(timer);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
        startTimer();
    } else {
        endGame();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            alert("انتهى الوقت! ⏰");
            document.getElementById("next-btn").classList.remove("hidden");
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");

    document.getElementById("final-name").textContent = playerName;
    document.getElementById("final-score").textContent = score;
}

function restartGame() {
    location.reload();
}
