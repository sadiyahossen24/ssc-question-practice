document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("student-name");
    const batchSelect = document.getElementById("student-class");
    const groupSelect = document.getElementById("student-group");

    // LocalStorage থেকে আগের সেভ করা ডাটা বক্সে বসানো
    if (nameInput) nameInput.value = localStorage.getItem("userName") || "";
    if (batchSelect) batchSelect.value = localStorage.getItem("userBatch") || "2026";
    if (groupSelect) groupSelect.value = (localStorage.getItem("userGroup") || "science").toLowerCase();

    const profileForm = document.getElementById("profile-form");
    if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameVal = nameInput ? nameInput.value.trim() : "SADIYA";
            const batchVal = batchSelect ? batchSelect.value : "2026";
            const groupVal = groupSelect ? groupSelect.value.toLowerCase().trim() : "science";

            // LocalStorage-এ সঠিকভাবে সেভ করা
            localStorage.setItem("userName", nameVal);
            localStorage.setItem("userBatch", batchVal);
            localStorage.setItem("userGroup", groupVal);

            alert("Profile Updated Successfully! 🎉");
            window.location.href = "/";
        });
    }
});