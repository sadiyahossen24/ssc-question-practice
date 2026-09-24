import sqlite3

def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    
    # Questions table create kora
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT NOT NULL,
            chapter TEXT NOT NULL,
            question TEXT NOT NULL,
            option_a TEXT NOT NULL,
            option_b TEXT NOT NULL,
            option_c TEXT NOT NULL,
            option_d TEXT NOT NULL,
            correct_option TEXT NOT NULL
        )
    ''')
    
    # Dummy questions add kora (Jodi table khali thake)
    cursor.execute("SELECT COUNT(*) FROM questions")
    if cursor.fetchone()[0] == 0:
        sample_questions = [
            ('Physics', 'Motion', 'গতির ১ম সূত্র কোনটি প্রকাশ করে?', 'বল', 'ভরবেগ', 'জড়তা', 'কাজ', 'c'),
            ('Physics', 'Motion', 'সমবেগে চলমান বস্তুর ত্বরণ কত?', '৯.৮', 'শূন্য', 'ধ্রুবক', 'অসীম', 'b'),
            ('ICT', 'System', 'কম্পিউটারের মস্তিষ্ক বলা হয় কোনটিকে?', 'RAM', 'Hard Disk', 'CPU', 'Monitor', 'c')
        ]
        cursor.executemany('''
            INSERT INTO questions (subject, chapter, question, option_a, option_b, option_c, option_d, correct_option)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', sample_questions)
        print("Sample questions added!")

    conn.commit()
    conn.close()
    print("Database initialized successfully!")

if __name__ == '__main__':
    init_db()