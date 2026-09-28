let currentSubjectId = null;
let currentSubjectObj = null;

const boardYears = [
    { id: "2024", name: "Board Questions 2024" },
    { id: "2023", name: "Board Questions 2023" },
    { id: "2022", name: "Board Questions 2022" },
    { id: "2021", name: "Board Questions 2021" }
];

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentSubjectId = urlParams.get("subject");

    const subjectTitleEl = document.getElementById("selected-subject-title");

    if (!currentSubjectId || typeof subjectData === "undefined") {
        if (subjectTitleEl) subjectTitleEl.innerText = "Select Subject";
        return;
    }

    Object.keys(subjectData).forEach(group => {
        const sub = subjectData[group].find(s => s.id === currentSubjectId);
        if (sub) currentSubjectObj = sub;
    });

    if (currentSubjectObj) {
        if (subjectTitleEl) {
            subjectTitleEl.innerText = `${currentSubjectObj.icon} ${currentSubjectObj.name}`;
        }
        renderChapterList();
    } else {
        if (subjectTitleEl) subjectTitleEl.innerText = "Subject Not Found";
    }
});

function switchType(type) {
    const chapterTab = document.getElementById("tab-chapter");
    const yearTab = document.getElementById("tab-year");

    if (type === 'chapter') {
        chapterTab.classList.add("active");
        yearTab.classList.remove("active");
        renderChapterList();
    } else {
        yearTab.classList.add("active");
        chapterTab.classList.remove("active");
        renderYearList();
    }
}

function renderChapterList() {
    const container = document.getElementById("item-list-container");
    if (!container || !currentSubjectObj) return;

    container.innerHTML = "";

    const chapters = currentSubjectObj.chapters || [];
    chapters.forEach((chapterName, index) => {
        const card = createItemCard(chapterName, 'chapter', index + 1);
        container.appendChild(card);
    });
}

function renderYearList() {
    const container = document.getElementById("item-list-container");
    if (!container) return;

    container.innerHTML = "";

    boardYears.forEach(yearObj => {
        const card = createItemCard(yearObj.name, 'year', yearObj.id);
        container.appendChild(card);
    });
}

function createItemCard(title, category, identifier) {
    const card = document.createElement("div");
    card.className = "chapter-card";
    
    card.innerHTML = `
        <div class="chapter-info">
            <h4>${title}</h4>
        </div>
        <div class="chapter-actions">
            <button onclick="startQuiz('${currentSubjectId}', '${category}', '${identifier}', 'practice')" class="btn-practice">Practice 📚</button>
            <button onclick="startQuiz('${currentSubjectId}', '${category}', '${identifier}', 'exam')" class="btn-exam">Exam ⏱️</button>
        </div>
    `;
    return card;
}

function startQuiz(subjectId, category, targetId, modeType) {
    window.location.href = `/quiz?subject=${subjectId}&category=${category}&target=${targetId}&mode=${modeType}`;
}