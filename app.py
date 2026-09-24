from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chapters')
def chapters():
    return render_template('chapters.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

# Database theke sob question anar API
@app.route('/api/questions')
def get_questions():
    conn = get_db_connection()
    questions = conn.execute('SELECT * FROM questions').fetchall()
    conn.close()
    
    # Question gulo JSON format-e convert kora
    data = []
    for q in questions:
        data.append({
            'id': q['id'],
            'subject': q['subject'],
            'chapter': q['chapter'],
            'question': q['question'],
            'options': [q['option_a'], q['option_b'], q['option_c'], q['option_d']],
            'correct_option': q['correct_option']
        })
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)