# 🎯 SSC Exam Prep App (Neobrutalism Edition)

An interactive, high-contrast Neobrutalism-themed web application designed for SSC candidates in Bangladesh. Features personalized group-based subject filtering, chapter-wise practice, and year-wise board question preparation.

---

## 🛠️ Tech Stack & Architecture

- **Backend:** Python (Flask)
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Design System:** Neobrutalism (High contrast, 3D borders, vibrant accents)
- **Data Storage:** LocalStorage (User Profile) + Dynamic API Endpoints

### 📁 File Structure & Separation of Concerns

```text
├── app.py                  # Flask backend routes & mock API
├── README.md               # Project documentation
├── static/
│   ├── css/
│   │   └── style.css       # Unified Neobrutalism global styles
│   └── js/
│       ├── home.js         # Dynamic group filtering & subject rendering
│       ├── profile.js      # User onboard & profile management
│       ├── mode.js         # Practice mode selection (Chapter vs Year)
│       └── chapters.js     # Dynamic chapter/year list rendering
└── templates/
    ├── index.html          # Main Dashboard
    ├── profile.html        # Profile setup screen
    ├── mode.html           # Practice mode choice screen
    ├── chapters.html       # Chapter / Year list view
    └── quiz.html           # MCQ quiz engine screen