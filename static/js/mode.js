document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'physics';

    const chapterBtn = document.getElementById("chapter-mode-btn");
    const yearBtn = document.getElementById("year-mode-btn");

    if (chapterBtn) {
        chapterBtn.href = `/chapters?subject=${subjectParam}&mode=chapter`;
    }

    if (yearBtn) {
        yearBtn.href = `/chapters?subject=${subjectParam}&mode=year`;
    }
});