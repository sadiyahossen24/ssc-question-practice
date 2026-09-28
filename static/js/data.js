let questions = [];
let currentQuestionIndex = 0;
let score = 0;

async function loadQuiz() {
    try {
        const response = await fetch('/api/questions');
        questions = await response.json();
        
        console.log("Fetched questions:", questions); // Debugging line
        
        if (questions && questions.length > 0) {
            showQuestion();
        } else {
            document.getElementById('question-text').innerText = "No questions found in database!";
        }
    } catch (error) {
        console.error("Error loading questions:", error);
        document.getElementById('question-text').innerText = "Failed to load questions.";
    }
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Header & Question text
    document.getElementById('subject-title').innerText = `${currentQuestion.subject || 'Subject'} - ${currentQuestion.chapter || 'Chapter'}`;
    document.getElementById('progress-text').innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('question-text').innerText = currentQuestion.question;

    // Options Clear & Inject
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const optionKeys = ['a', 'b', 'c', 'd'];
    
    // Database theke options array na ashle object option gulo handle korar জন্য
    const optionsList = Array.isArray(currentQuestion.options) 
        ? currentQuestion.options 
        : [currentQuestion.option_a, currentQuestion.option_b, currentQuestion.option_c, currentQuestion.option_d];

    optionsList.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = optionText;
        btn.onclick = () => selectOption(optionKeys[index], currentQuestion.correct_option, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(selected, correct, button) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        score++;
    } else {
        button.style.backgroundColor = '#f44336';
        button.style.color = 'white';
    }

    document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result-card').style.display = 'block';
    document.getElementById('final-score').innerText = `Your Score: ${score} / ${questions.length}`;
}

document.addEventListener('DOMContentLoaded', loadQuiz);