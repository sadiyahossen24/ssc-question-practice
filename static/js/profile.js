document.addEventListener("DOMContentLoaded", () => {
    // আগে থেকে তথ্য সেভ থাকলে ফর্মে দেখানো
    const nameInput = document.getElementById("student-name");
    const classInput = document.getElementById("student-class");
    const groupInput = document.getElementById("student-group");
    const profileForm = document.getElementById("profile-form");

    if (nameInput) nameInput.value = localStorage.getItem("student_name") || "";
    if (classInput) classInput.value = localStorage.getItem("student_class") || "SSC 2025";
    if (groupInput) groupInput.value = localStorage.getItem("student_group") || "science";

    if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = nameInput.value.trim();
            const cls = classInput.value;
            const group = groupInput.value;

            if (!name) {
                alert("দয়া করে তোমার নাম লেখো!");
                return;
            }

            // LocalStorage-এ ডাটা সেভ করা
            localStorage.setItem("student_name", name);
            localStorage.setItem("student_class", cls);
            localStorage.setItem("student_group", group);

            alert("তথ্য সফলভাবে সংরক্ষণ করা হয়েছে! 🎉");
            
            // সেভ হওয়ার পর সরাসরি হোমপেজে নিয়ে যাবে
            window.location.href = "/";
        });
    }
});