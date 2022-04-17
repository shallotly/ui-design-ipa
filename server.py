from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

data = [ ]

quiz = [ ]

quiz_answer = [ ]

@app.route('/')
def main():

    return render_template('index.html')


@app.route('/learn/<id>')
def learn(id):

    global data

    return render_template('recipe.html', data=data[int(id)])


@app.route('/quiz/<id>')
def quiz(id):

    global quiz
    global quiz_answer

    return render_template('quiz.html', quiz=quiz[int(id)], answer=quiz_answer[int(id)])

@app.route('/quiz-score')
def score():

    global quiz
    global quiz_answer

    return render_template('score.html', quiz=quiz, answer=quiz_answer)

if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)
