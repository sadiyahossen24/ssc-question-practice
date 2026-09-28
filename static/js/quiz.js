document.addEventListener("DOMContentLoaded", () => {
    const progressEl = document.getElementById("quiz-progress");
    const questionEl = document.getElementById("question-title");
    const optionsBox = document.getElementById("options-box");
    const explanationBox = document.getElementById("explanation-box");
    const explanationText = document.getElementById("explanation-text");
    const nextBtn = document.getElementById("next-btn");

    let questions = [];
    let currentIndex = 0;

    // API থেকে ডেটা আনা
    fetch('/api/questions')
        .then(res => res.json())
        .then(data => {
            questions = data;
            if (questions && questions.length > 0) {
                loadQuestion(currentIndex);
            } else {
                if (questionEl) questionEl.innerText = "কোনো প্রশ্ন পাওয়া যায়নি!";
            }
        })
        .catch(err => {
            console.error("Error loading questions:", err);
            if (questionEl) questionEl.innerText = "প্রশ্ন লোড করতে সমস্যা হয়েছে!";
        });

    function loadQuestion(index) {
        const q = questions[index];
        if (progressEl) progressEl.innerText = `Question ${index + 1} of ${questions.length}`;
        if (questionEl) questionEl.innerText = q.question;

        if (optionsBox) optionsBox.innerHTML = "";
        if (explanationBox) explanationBox.style.display = "none";
        if (nextBtn) nextBtn.style.display = "none";

        q.options.forEach((opt, optIndex) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.addEventListener("click", () => handleAnswer(optIndex, q.answer, q.explanation));
            if (optionsBox) optionsBox.appendChild(btn);
        });
    }

    function handleAnswer(selectedIndex, correctIndex, explanation) {
        const buttons = optionsBox.querySelectorAll(".option-btn");
        
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctIndex) {
                btn.classList.add("correct");
            }
        });

        if (selectedIndex !== correctIndex) {
            buttons[selectedIndex].classList.add("wrong");
        }

        if (explanation && explanationBox && explanationText) {
            explanationText.innerText = explanation;
            explanationBox.style.display = "block";
        }

        if (currentIndex < questions.length - 1 && nextBtn) {
            nextBtn.style.display = "block";
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex++;
            if (currentIndex < questions.length) {
                loadQuestion(currentIndex);
            }
        });
    }
});