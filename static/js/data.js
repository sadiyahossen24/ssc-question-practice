// API theke questions fetch kora
async function loadQuestions() {
    try {
        const response = await fetch('/api/questions');
        const questions = await response.json();
        console.log("Loaded Questions from Database:", questions);
        return questions;
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

// Page load hole questions fetch hobe
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});