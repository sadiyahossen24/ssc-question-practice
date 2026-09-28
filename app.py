from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Sample Question Data
questions_db = [
    {
        "id": 1,
        "subject": "physics",
        "chapter": "01",
        "year": "2024",
        "question": "ভৌত রাশি ও পরিমাপ: মূল একক কয়টি?",
        "options": ["৫টি", "৭টি", "৯টি", "৬৬টি"],
        "answer": 1,
        "explanation": "আন্তর্জাতিক একক পদ্ধতিতে (SI) মৌলিক একক হলো ৭টি।"
    },
    {
        "id": 2,
        "subject": "physics",
        "chapter": "01",
        "year": "2024",
        "question": "নিচের কোনটি মৌলিক রাশি?",
        "options": ["বল", "কাজ", "সময়", "বেগ"],
        "answer": 2,
        "explanation": "সময় একটি মৌলিক রাশি, যা অন্য কোনো রাশির ওপর নির্ভর করে না।"
    }
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/mode')
def mode():
    return render_template('mode.html')

@app.route('/chapters')
def chapters():
    return render_template('chapters.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/api/questions')
def get_questions():
    # কুইজের সব প্রশ্ন (ডেটাফ্রি ফ্যালব্যাকসহ)
    sample_questions = [
        {
            "id": 1,
            "subject": "physics",
            "question": "ভৌত রাশি ও পরিমাপ: মূল একক কয়টি?",
            "options": ["৫টি", "৭টি", "৯টি", "৬৬টি"],
            "answer": 1,
            "explanation": "আন্তর্জাতিক একক পদ্ধতিতে (SI) মৌলিক একক হলো ৭টি।"
        },
        {
            "id": 2,
            "subject": "physics",
            "question": "নিচের কোনটি মৌলিক রাশি?",
            "options": ["বল", "কাজ", "সময়", "বেগ"],
            "answer": 2,
            "explanation": "সময় একটি মৌলিক রাশি, যা অন্য কোনো রাশির ওপর নির্ভর করে না।"
        }
    ]

    # সব সময় প্রশ্ন রিটার্ন করবে যেন স্ক্রিন আটকে না থাকে
    return jsonify(sample_questions)
if __name__ == '__main__':
    app.run(debug=True)
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0  # Caching disable করার জন্য