# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

data = [ ]

quiz_data = {
    "1": {
        "id": "1",
        "word": "hat",
        "answer": "b",
        "choice_a": "[a]",
        "choice_b": "[æ]",
        "audio_answer": "https://drive.google.com/file/d/14aaVBFQ-6K-258bfqXjIsmQe3QOnayy8/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1sY52GApTBZTUGNG_pnTvVwzW2JBzhM2y/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/14aaVBFQ-6K-258bfqXjIsmQe3QOnayy8/view?resourcekey"
    },

    "2": {
        "id": "2",
        "word": "hit",
        "answer": "a",
        "choice_a": "[I]",
        "choice_b": "[i]",
        "audio_answer": "https://drive.google.com/file/d/1_CumTjXF2f8lwqLRVWxiRH56ZzIXlxjA/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1_CumTjXF2f8lwqLRVWxiRH56ZzIXlxjA/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1cJmzBs7sAIVGvJ2oLgTt1oj2Y10vuQt1/view?resourcekey"
    },

    "3": {
        "id": "3",
        "word": "puppy",
        "answer": "b",
        "choice_a": "[ə]",
        "choice_b": "[ʌ]",
        "audio_answer": "https://drive.google.com/file/d/1pSjDfoP--V69-LE6J2vkLYKwdVePeupK/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1MztrE1omcAPkOB4X0sQCOOEYaH1FWCg1/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1pSjDfoP--V69-LE6J2vkLYKwdVePeupK/view?resourcekey"
    },

    "4": {
        "id": "4",
        "word": "hot",
        "answer": "a",
        "choice_a": "[a]",
        "choice_b": "[æ]",
        "audio_answer": "https://drive.google.com/file/d/1sY52GApTBZTUGNG_pnTvVwzW2JBzhM2y/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1sY52GApTBZTUGNG_pnTvVwzW2JBzhM2y/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/14aaVBFQ-6K-258bfqXjIsmQe3QOnayy8/view?resourcekey"
    },

    "5": {
        "id": "5",
        "word": "eat",
        "answer": "b",
        "choice_a": "[I]",
        "choice_b": "[i]",
        "audio_answer": "https://drive.google.com/file/d/1cJmzBs7sAIVGvJ2oLgTt1oj2Y10vuQt1/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1_CumTjXF2f8lwqLRVWxiRH56ZzIXlxjA/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1cJmzBs7sAIVGvJ2oLgTt1oj2Y10vuQt1/view?resourcekey"
    },

    "6": {
        "id": "6",
        "word": "sample",
        "answer": "a",
        "choice_a": "[ə]",
        "choice_b": "[ʌ]",
        "audio_answer": "https://drive.google.com/file/d/1MztrE1omcAPkOB4X0sQCOOEYaH1FWCg1/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1MztrE1omcAPkOB4X0sQCOOEYaH1FWCg1/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1pSjDfoP--V69-LE6J2vkLYKwdVePeupK/view?resourcekey"
    },
}

quiz_answer = {
    "1": {
        "id": "1",
        "answer": "none",
        "correct": "b"
    },

     "2": {
        "id": "2",
        "answer": "none",
        "correct": "a"
    },

     "3": {
        "id": "3",
        "answer": "none",
        "correct": "b"
    },

     "4": {
        "id": "4",
        "answer": "none",
        "correct": "a"
    },

     "5": {
        "id": "5",
        "answer": "none",
        "correct": "b"
    },

     "6": {
        "id": "6",
        "answer": "none",
        "correct": "a"
    },
}

score = 0

@app.route('/')
def main():

    return render_template('index.html')

@app.route('/quiz')
def quiz_main():

    return render_template('quiz-index.html')


@app.route('/learn/<id>')
def learn(id):

    global data

    return render_template('learn.html', data=data[int(id)])


@app.route('/quiz/<id>')
def quiz(id):

    global quiz_data
    global quiz_answer

    return render_template('quiz.html', quiz=quiz_data[int(id)], answer=quiz_answer[int(id)])

@app.route('/quiz-score')
def score():

    global quiz_data
    global quiz_answer
    global final_score

    final_score = score
    score = 0

    return render_template('score.html', quiz=quiz_data, answer=quiz_answer, score=final_score)


@app.route('/add_answer', methods=['GET', 'POST'])
def add_answer():
    global quiz_answer
    global score

    json_data = request.get_json()
    id = json_data["id"]
    answer = json_data["answer"]

    quiz_answer[id]["answer"] = answer
    if answer == quiz_answer[id]["correct"]:
        score += 1

    return jsonify(answer = quiz_answer, score = score)


if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)
