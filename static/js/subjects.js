const subjectData = {
    general: [
        {
            id: "english_1st",
            name: "English 1st Paper",
            icon: "📖",
            chapters: [
                { id: "e1_c1", name: "Unit 1: Good Citizens" },
                { id: "e1_c2", name: "Unit 2: Pastime" },
                { id: "e1_c3", name: "Unit 3: Events and Festivals" },
                { id: "e1_c4", name: "Unit 4: Are We Aware?" }
            ]
        },
        {
            id: "english_2nd",
            name: "English 2nd Paper",
            icon: "✍️",
            chapters: [
                { id: "e2_c1", name: "Grammar: Tense & Right Form of Verbs" },
                { id: "e2_c2", name: "Grammar: Prepositions" },
                { id: "e2_c3", name: "Grammar: Transformation of Sentences" },
                { id: "e2_c4", name: "Grammar: Tag Questions" }
            ]
        },
        {
            id: "math",
            name: "General Mathematics",
            icon: "📐",
            chapters: [
                { id: "m_c1", name: "১ম অধ্যায়: বাস্তব সংখ্যা" },
                { id: "m_c2", name: "২য় অধ্যায়: সেট ও ফাংশন" },
                { id: "m_c3", name: "৩য় অধ্যায়: বীজগণিতীয় রাশি" },
                { id: "m_c7", name: "৭ম অধ্যায়: ব্যবহারিক জ্যামিতি" },
                { id: "m_c9", name: "৯ম অধ্যায়: ত্রিকোণমিতিক অনুপাত" },
                { id: "m_c17", name: "১৭শ অধ্যায়: পরিসংখ্যান" }
            ]
        }
    ],
    science: [
        {
            id: "physics",
            name: "Physics",
            icon: "⚡",
            chapters: [
                { id: "p_c1", name: "১ম অধ্যায়: ভৌত রাশি ও পরিমাপ" },
                { id: "p_c2", name: "২য় অধ্যায়: গতি" },
                { id: "p_c3", name: "৩য় অধ্যায়: বল" },
                { id: "p_c4", name: "৪র্থ অধ্যায়: কাজ, ক্ষমতা ও শক্তি" },
                { id: "p_c11", name: "১১শ অধ্যায়: চল বিদ্যুৎ" }
            ]
        },
        {
            id: "chemistry",
            name: "Chemistry",
            icon: "🧪",
            chapters: [
                { id: "c_c1", name: "১ম অধ্যায়: রসায়নের ধারণা" },
                { id: "c_c2", name: "২য় অধ্যায়: পদার্থের অবস্থা" },
                { id: "c_c3", name: "৩য় অধ্যায়: পদার্থের গঠন" },
                { id: "c_c4", name: "৪র্থ অধ্যায়: পর্যায় সারণি" },
                { id: "c_c5", name: "৫ম অধ্যায়: রাসায়নিক বন্ধন" }
            ]
        },
        {
            id: "higher_math",
            name: "Higher Mathematics",
            icon: "📊",
            chapters: [
                { id: "hm_c1", name: "১ম অধ্যায়: সেট ও ফাংশন" },
                { id: "hm_c2", name: "২য় অধ্যায়: বীজগণিতীয় রাশি" },
                { id: "hm_c8", name: "৮ম অধ্যায়: ত্রিকোণমিতি" }
            ]
        },
        {
            id: "biology",
            name: "Biology",
            icon: "🧬",
            chapters: [
                { id: "b_c1", name: "১ম অধ্যায়: জীবন পাঠ" },
                { id: "b_c2", name: "২য় অধ্যায়: জীবকোষ ও টিস্যু" },
                { id: "b_c4", name: "৪র্থ অধ্যায়: জীবনীশক্তি" }
            ]
        }
    ],
    commerce: [
        {
            id: "accounting",
            name: "Accounting",
            icon: "🧮",
            chapters: [
                { id: "acc_c1", name: "১ম অধ্যায়: হিসাববিজ্ঞান পরিচিতি" },
                { id: "acc_c2", name: "২য় অধ্যায়: লেনদেন" },
                { id: "acc_c3", name: "৩য় অধ্যায়: দুতরফা দাখিলা পদ্ধতি" }
            ]
        },
        {
            id: "finance",
            name: "Finance & Banking",
            icon: "🏦",
            chapters: [
                { id: "fin_c1", name: "১ম অধ্যায়: অর্থায়ন ও ব্যবসায় অর্থায়ন" },
                { id: "fin_c3", name: "৩য় অধ্যায়: অর্থের সময়মূল্য" }
            ]
        },
        {
            id: "busi_ent",
            name: "Business Entrepreneurship",
            icon: "💼",
            chapters: [
                { id: "be_c1", name: "১ম অধ্যায়: ব্যবসায় পরিচিতি" },
                { id: "be_c2", name: "২য় অধ্যায়: ব্যবসায় উদ্যোগ ও উদ্যোক্তা" }
            ]
        }
    ],
    arts: [
        {
            id: "history",
            name: "History of Bangladesh",
            icon: "📜",
            chapters: [
                { id: "h_c1", name: "১ম অধ্যায়: ইতিহাস পরিচিতি" },
                { id: "h_c2", name: "২য় অধ্যায়: বিশ্বসভ্যতা" }
            ]
        },
        {
            id: "geography",
            name: "Geography & Environment",
            icon: "🌍",
            chapters: [
                { id: "g_c1", name: "১ম অধ্যায়: ভূগোল ও পরিবেশ" },
                { id: "g_c2", name: "২য় অধ্যায়: মহাবিশ্ব ও আমাদের পৃথিবী" }
            ]
        },
        {
            id: "civics",
            name: "Civics & Citizenship",
            icon: "🏛️",
            chapters: [
                { id: "civ_c1", name: "১ম অধ্যায়: পৌরনীতি ও নাগরিকতা" },
                { id: "civ_c2", name: "২য় অধ্যায়: নাগরিক ও নাগরিকতা" }
            ]
        }
    ]
};