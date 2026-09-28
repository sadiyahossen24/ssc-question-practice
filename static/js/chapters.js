const contentData = {
    physics: {
        badge: '⚡ পদার্থবিজ্ঞান',
        chapters: [
            { id: '01', number: '01', title: 'ভৌত রাশি ও পরিমাপ', desc: '১ম অধ্যায় • MCQ সেট' },
            { id: '02', number: '02', title: 'গতি (Motion)', desc: '২য় অধ্যায় • MCQ সেট' },
            { id: '03', number: '03', title: 'বল (Force)', desc: '৩য় অধ্যায় • MCQ সেট' },
            { id: '04', number: '04', title: 'কাজ, ক্ষমতা ও শক্তি', desc: '৪র্থ অধ্যায় • MCQ সেট' }
        ],
        years: [
            { id: '2024', number: '24', title: 'SSC ২০২৪ বোর্ড প্রশ্ন', desc: 'সকল বোর্ড প্রশ্ন সমাধান' },
            { id: '2023', number: '23', title: 'SSC ২০২৩ বোর্ড প্রশ্ন', desc: 'সকল বোর্ড প্রশ্ন সমাধান' },
            { id: '2022', number: '22', title: 'SSC ২০২২ বোর্ড প্রশ্ন', desc: 'সকল বোর্ড প্রশ্ন সমাধান' }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'physics';
    const modeParam = urlParams.get('mode') || 'chapter';

    const currentSubject = contentData[subjectParam] || contentData['physics'];

    const badgeElement = document.getElementById("chapter-badge");
    if (badgeElement) badgeElement.innerText = currentSubject.badge;

    const container = document.getElementById("chapter-list-container");
    const countTag = document.getElementById("chapter-count-tag");

    const items = modeParam === 'year' ? currentSubject.years : currentSubject.chapters;

    if (countTag) {
        countTag.innerText = modeParam === 'year' ? `${items.length}টি বছর` : `${items.length}টি অধ্যায়`;
    }

    if (container) {
        container.innerHTML = "";
        items.forEach(item => {
            const queryKey = modeParam === 'year' ? 'year' : 'chapter';
            container.innerHTML += `
                <a href="/quiz?subject=${subjectParam}&${queryKey}=${item.id}" class="subject-card">
                    <div class="card-left">
                        <div class="icon-box physics-icon">${item.number}</div>
                        <div class="subject-info">
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                    <span class="action-btn">Start →</span>
                </a>
            `;
        });
    }
});
// Physics Chapter List
const physicsChapters = [
    { id: 1, name: "১ম অধ্যায়: ভৌত রাশি ও পরিমাপ", totalQ: 45 },
    { id: 2, name: "২য় অধ্যায়: গতি", totalQ: 50 },
    { id: 3, name: "৩য় অধ্যায়: বল", totalQ: 40 },
    { id: 4, name: "৪র্থ অধ্যায়: কাজ, ক্ষমতা ও শক্তি", totalQ: 48 },
    { id: 5, name: "৫ম অধ্যায়: পদার্থের অবস্থা ও চাপ", totalQ: 35 },
    { id: 6, name: "৬ষ্ঠ অধ্যায়: বস্তুর উপর তাপের প্রভাব", totalQ: 42 },
    { id: 7, name: "৭ম অধ্যায়: তরঙ্গ ও শব্দ", totalQ: 38 },
    { id: 8, name: "৮ম অধ্যায়: আলোর প্রতিফলন", totalQ: 45 },
    { id: 9, name: "৯ম অধ্যায়: আলোর প্রতিসরণ", totalQ: 40 },
    { id: 10, name: "১০ম অধ্যায়: স্থির বিদ্যুৎ", totalQ: 35 },
    { id: 11, name: "১১শ অধ্যায়: চল বিদ্যুৎ", totalQ: 55 },
    { id: 12, name: "১২শ অধ্যায়: বিদ্যুতের চৌম্বক ক্রিয়া", totalQ: 30 },
    { id: 13, name: "১৩শ অধ্যায়: আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স", totalQ: 25 },
    { id: 14, name: "১৪শ অধ্যায়: জীবন বাঁচাতে পদার্থবিজ্ঞান", totalQ: 20 }
];

// Board Exam Years List
const boardYears = [
    { year: "2024", label: "SSC Board Exam 2024 (All Boards)" },
    { year: "2023", label: "SSC Board Exam 2023 (All Boards)" },
    { year: "2022", label: "SSC Board Exam 2022 (All Boards)" },
    { year: "2021", label: "SSC Board Exam 2021 (All Boards)" },
    { year: "2020", label: "SSC Board Exam 2020 (All Boards)" }
];