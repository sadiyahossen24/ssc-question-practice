const subjectsData = {
    science: [
        { id: 'physics', name: 'পদার্থবিজ্ঞান', desc: 'Physics • ১৪টি অধ্যায়', icon: '⚡', iconClass: 'physics-icon', active: true, link: '/mode?subject=physics' },
        { id: 'chemistry', name: 'রসায়ন', desc: 'Chemistry • কামিং সুন', icon: '🧪', iconClass: 'chem-icon', active: false },
        { id: 'higher_math', name: 'উচ্চতর গণিত', desc: 'Higher Math • কামিং সুন', icon: '📐', iconClass: 'math-icon', active: false }
    ],
    commerce: [
        { id: 'accounting', name: 'হিসাববিজ্ঞান', desc: 'Accounting • ১০টি অধ্যায়', icon: '📊', iconClass: 'physics-icon', active: false },
        { id: 'finance', name: 'ফিন্যান্স ও ব্যাংকিং', desc: 'Finance • কামিং সুন', icon: '💰', iconClass: 'chem-icon', active: false },
        { id: 'business_ent', name: 'ব্যবসায় উদ্যোগ', desc: 'Business Ent. • কামিং সুন', icon: '🏢', iconClass: 'math-icon', active: false }
    ],
    arts: [
        { id: 'history', name: 'বাংলাদেশের ইতিহাস', desc: 'History • ১৫টি অধ্যায়', icon: '📜', iconClass: 'physics-icon', active: false },
        { id: 'civics', name: 'পৌরনীতি ও নাগরিকতা', desc: 'Civics • কামিং সুন', icon: '🏛️', iconClass: 'chem-icon', active: false },
        { id: 'geography', name: 'ভূগোল ও পরিবেশ', desc: 'Geography • কামিং সুন', icon: '🌍', iconClass: 'math-icon', active: false }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage থেকে শিক্ষার্থীর তথ্য পড়া
    const name = localStorage.getItem("student_name") || "শিক্ষার্থী";
    const cls = localStorage.getItem("student_class") || "SSC 2025";
    const group = localStorage.getItem("student_group") || "science";

    // হেডার আপডেট
    const userNameDisplay = document.getElementById("user-name-display");
    const userInfoDisplay = document.getElementById("user-info-display");

    if (userNameDisplay) userNameDisplay.innerText = `হ্যালো, ${name} 👋`;
    if (userInfoDisplay) userInfoDisplay.innerText = `${cls} • ${group.toUpperCase()} Group`;

    // গ্রুপ অনুযায়ী সাবজেক্ট ফিল্টার
    const subjects = subjectsData[group] || subjectsData['science'];
    const container = document.getElementById("subject-list-container");
    const countTag = document.getElementById("subject-count-tag");

    if (countTag) countTag.innerText = `${subjects.length}টি বিষয়`;

    if (container) {
        container.innerHTML = "";
        subjects.forEach(sub => {
            if (sub.active) {
                container.innerHTML += `
                    <a href="${sub.link}" class="subject-card">
                        <div class="card-left">
                            <div class="icon-box ${sub.iconClass}">${sub.icon}</div>
                            <div class="subject-info">
                                <h4>${sub.name}</h4>
                                <p>${sub.desc}</p>
                            </div>
                        </div>
                        <span class="action-btn">প্র্যাকটিস →</span>
                    </a>
                `;
            } else {
                container.innerHTML += `
                    <div class="subject-card disabled" onclick="alert('${sub.name} কুইজ খুব শীঘ্রই যুক্ত হচ্ছে!')">
                        <div class="card-left">
                            <div class="icon-box ${sub.iconClass}">${sub.icon}</div>
                            <div class="subject-info">
                                <h4>${sub.name}</h4>
                                <p>${sub.desc}</p>
                            </div>
                        </div>
                        <span class="badge-locked">আসছে</span>
                    </div>
                `;
            }
        });
    }
});