let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isPracticeMode = true;

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get("subject");
    const category = urlParams.get("category"); // 'chapter' or 'year'
    const target = urlParams.get("target");     // index e.g. 1
    const mode = urlParams.get("mode");

    isPracticeMode = (mode === "practice");

    const questionKey = category === "chapter" ? `chapter_${target}` : `year_${target}`;

    // Safety Data Check
    if (
        typeof questionBank !== "undefined" && 
        questionBank[subject] && 
        questionBank[subject][questionKey]
    ) {
        currentQuestions = questionBank[subject][questionKey];
    } else {
        currentQuestions = [];
    }

    const quizTitleEl = document.getElementById("quiz-title");
    if (quizTitleEl) {
        quizTitleEl.innerText = `${subject ? subject.toUpperCase() : ''} (${category === 'chapter' ? 'Chapter' : 'Year'} ${target || ''})`;
    }

    if (currentQuestions && currentQuestions.length > 0) {
        loadQuestion();
    } else {
        const qText = document.getElementById("question-text");
        if (qText) {
            qText.innerText = "⚠️ এই অধ্যায়ের জন্য প্রশ্ন যুক্ত করা হয়নি। (Physics Chapter 1 বা 2 চেক করে দেখো)";
        }
        const optContainer = document.getElementById("options-container");
        if (optContainer) optContainer.innerHTML = "";
    }
});

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];

    const progressEl = document.getElementById("quiz-progress");
    if (progressEl) {
        progressEl.innerText = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    }
    
    const qText = document.getElementById("question-text");
    if (qText) {
        qText.innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    }

    const expBox = document.getElementById("explanation-box");
    if (expBox) expBox.style.display = "none";

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.style.display = "none";

    const optionsContainer = document.getElementById("options-container");
    if (optionsContainer) {
        optionsContainer.innerHTML = "";
        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.onclick = () => selectOption(idx, q.answer, q.explanation);
            optionsContainer.appendChild(btn);
        });
    }
}

function selectOption(selectedIndex, correctIndex, explanation) {
    const optionBtns = document.querySelectorAll(".option-btn");
    
    optionBtns.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        optionBtns[selectedIndex].classList.add("correct");
        score++;
    } else {
        optionBtns[selectedIndex].classList.add("wrong");
        if (optionBtns[correctIndex]) {
            optionBtns[correctIndex].classList.add("correct");
        }
    }

    if (isPracticeMode && explanation) {
        const expBox = document.getElementById("explanation-box");
        const expText = document.getElementById("explanation-text");
        if (expText) expText.innerText = explanation;
        if (expBox) expBox.style.display = "block";
    }

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const card = document.getElementById("quiz-card");
    if (card) {
        card.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2>🎉 কুইজ সমাপ্ত!</h2>
                <p style="font-size: 18px; margin: 15px 0;">তোমার স্কোর: <strong>${score} / ${currentQuestions.length}</strong></p>
                <button onclick="window.location.href='/'" class="btn-practice" style="width: 100%; padding: 12px;">Home-এ ফিরে যাও 🏠</button>
            </div>
        `;
    }
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.style.display = "none";
}