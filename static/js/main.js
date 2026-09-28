document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage থেকে Profile Data পড়া
    const userName = localStorage.getItem("userName") || "SADIYA";
    const userBatch = localStorage.getItem("userBatch") || "2026";
    const userGroup = localStorage.getItem("userGroup") || "science";

    // Header Element-এ Data সেট করা
    const userNameEl = document.getElementById("user-name");
    const userBatchEl = document.getElementById("user-batch");
    const userGroupEl = document.getElementById("user-group");

    if (userNameEl) userNameEl.innerText = `Hello, ${userName} 👋`;
    if (userBatchEl) userBatchEl.innerText = `SSC ${userBatch}`;
    if (userGroupEl) userGroupEl.innerText = userGroup.toUpperCase();

    // Container Elements
    const generalContainer = document.getElementById("general-subject-list");
    const groupContainer = document.getElementById("group-subject-list");

    if (typeof subjectData === "undefined") return;

    // Helper Function to Create Subject Card
    function createCard(sub) {
        const card = document.createElement("a");
        card.href = `/mode?subject=${sub.id}`;
        card.className = "subject-card";
        card.innerHTML = `
            <div class="subject-icon">${sub.icon}</div>
            <div class="subject-info">
                <h4>${sub.name}</h4>
                <p>${sub.chapters ? sub.chapters.length : 0} Chapters</p>
            </div>
        `;
        return card;
    }

    // Load General Subjects
    if (generalContainer && subjectData.general) {
        generalContainer.innerHTML = "";
        subjectData.general.forEach(sub => {
            generalContainer.appendChild(createCard(sub));
        });
    }

    // Load Group Subjects
    if (groupContainer && subjectData[userGroup]) {
        groupContainer.innerHTML = "";
        subjectData[userGroup].forEach(sub => {
            groupContainer.appendChild(createCard(sub));
        });
    }
});