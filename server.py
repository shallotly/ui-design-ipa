# -*- coding: utf-8 -*-
import json

from flask import Flask
from flask import render_template
from flask import Response, request, jsonify


app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

# load data
with open("./static/data/learn-data.json", "r") as f:  
    data = json.load(f)

with open("./static/data/quiz-data.json", "r") as f:  
    quiz_data = json.load(f)

with open("./static/data/quiz-answer.json", "r") as f:  
    quiz_answer = json.load(f)

# routes
@app.route('/')
def main():

    return render_template('index.html')

@app.route('/learn/<id>')
def learn(id):

    global data

    return render_template('learn.html', data=data[int(id)-1], step=int(id), total=len(data), progress=int(int(id)/len(data)*100))

@app.route('/quiz')
def quiz_start():
    return render_template('quiz-start.html')

@app.route('/quiz/<id>')
def quiz(id):

    global quiz_data
    global quiz_answer

    if int(id) <= 6:
        answer=quiz_answer[int(id)-1]

    if id == '7':
        answer=quiz_answer[6:9]

    if id == '8':
        answer=quiz_answer[9:11]

    return render_template('quiz.html', data=quiz_data[int(id)-1], step=int(id), total=len(quiz_data), progress=int(int(id)/len(quiz_data)*100), answer=answer)

@app.route('/quiz-end')
def quiz_end():

    global quiz_answer
    score = 0

    for item in quiz_answer:
        if item['answer'] == item['correct']:
            score = score + 1

    return render_template('quiz-end.html', score=score)


@app.route('/add_answer', methods=['GET', 'POST'])
def add_answer():
    global quiz_answer

    json_data = request.get_json()
    id = json_data["id"]
    sub_id = json_data["sub_id"]
    answer = json_data["answer"]

    if int(id) <= 7:
        quiz_answer[(int(id)-1)+sub_id]["answer"] = answer
    else:
        quiz_answer[(int(id)-1)+sub_id+2]["answer"] = answer


    return jsonify(answers = quiz_answer)


if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)
