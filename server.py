# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

data = [
    {
        "text": "<b>This is the IPA vowel chart.</b> (IPA stands for International Phonetic Alphabet.) <br/> It shows all of the vowel sounds a human mouth can make.",
        "image": "/static/ipa-1.png"
    },
    {
        "text": "<b>These are the vowel sounds in American English.</b> (Don't worry about position.)",
        "image": "/static/ipa-2.png"
    },
    {
        "text": "Now we'll take a closer look at some <b>commonly confused vowels</b>.",
        "image": "/static/ipa-2.png"
    },
    {
        "text": "Pair 1: [i] and [I]",
        "explanation": [
            '[i] is the <b>long "i"</b> sound in English. It is the vowel sound in <b>"speed."</b>',
            '[I] is the <b>short "i"</b> sound in English. It is the vowel sound in <b>"spit."</b>'
        ],
        "actionText": "Do you hear a difference?",
        "image": "/static/ipa-2.png"
    },
    {
        "text": "Pair 1: [i] and [I]",
        "explanation": [
            '[i] is the <b>long "i"</b> sound in English. It is the vowel sound in <b>"speed."</b>',
            '[I] is the <b>short "i"</b> sound in English. It is the vowel sound in <b>"spit."</b>'
        ],
        "actionText": "<b>Practice!</b> Is it [i] or [I]?",
        "practice": [
            {
                "english": "sheet",
                "vowel": "[i]"
            },
            {
                "english": "pit",
                "vowel": "[I]"
            },
            {
                "english": "chip",
                "vowel": "[I]"
            },
            {
                "english": "feet",
                "vowel": "[i]"
            }
        ]
    },
    {
        "text": "Pair 2: [æ] and [a]",
        "explanation": [
            '[æ] is the <b>short "a"</b> sound in English. It is the vowel sound in <b>"cat."</b>',
            '[a] is the <b>"ah"</b> sound in English. It is the vowel sound in <b>"father."</b>'
        ],
        "actionText": "Do you hear a difference?",
        "image": "/static/ipa-2.png"
    },
    {
        "text": "Pair 2: [æ] and [a]",
        "explanation": [
            '[æ] is the <b>short "a"</b> sound in English. It is the vowel sound in <b>"cat."</b>',
            '[a] is the <b>"ah"</b> sound in English. It is the vowel sound in <b>"father."</b>'
        ],
        "actionText": "<b>Practice!</b> Is it [æ] or [a]?",
        "practice": [
            {
                "english": "olive",
                "vowel": "[a]"
            },
            {
                "english": "shackle",
                "vowel": "[æ]"
            },
            {
                "english": "sock",
                "vowel": "[a]"
            },
            {
                "english": "apple",
                "vowel": "[æ]"
            }
        ]
    },
    {
        "text": "Pair 3: [ʌ] and [ə]",
        "explanation": [
            '[ʌ] is the "uh" sound in a <b>stressed syllable</b>. It is the 1st vowel sound in <b>"<u>jus</u>tice."</b>',
            '[ə] is the "uh" sound in an <b>unstressed syllable</b>. It is the 2nd and 3rd vowel sounds in <b>"Ca<u>nada</u>."</b>'
        ],
        "actionText": "Do you hear a difference?",
        "image": "/static/ipa-2.png"
    },
    {
        "text": "Pair 3: [ʌ] and [ə]",
        "explanation": [
            '[ʌ] is the "uh" sound in a <b>stressed syllable</b>. It is the 1st vowel sound in <b>"<u>jus</u>tice."</b>',
            '[ə] is the "uh" sound in an <b>unstressed syllable</b>. It is the 2nd and 3rd vowel sounds in <b>"Ca<u>nada</u>."</b>'
        ],
        "actionText": "<b>Practice!</b> Is it [ʌ] or [ə] in the <u>underlined</u> syllable? <small>(Hint: Is the syllable stressed?)</small>",
        "practice": [
            {
                "english": "Co<u>lum</u>bia",
                "vowel": "[ʌ]"
            },
            {
                "english": "Tes<u>la</u>",
                "vowel": "[ə]"
            },
            {
                "english": "bat<u>ter</u>y",
                "vowel": "[ə]"
            },
            {
                "english": "<u>un</u>der",
                "vowel": "[ʌ]"
            }
        ]
    }
]

quiz_data = [
    {
        "id": "1",
        "word": "hat",
        "answer": "b",
        "choice_a": "[a]",
        "choice_b": "[æ]",
        "audio_answer": "https://drive.google.com/file/d/14aaVBFQ-6K-258bfqXjIsmQe3QOnayy8/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1sY52GApTBZTUGNG_pnTvVwzW2JBzhM2y/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/14aaVBFQ-6K-258bfqXjIsmQe3QOnayy8/view?resourcekey"
    },

    {
        "id": "2",
        "word": "hit",
        "answer": "a",
        "choice_a": "[I]",
        "choice_b": "[i]",
        "audio_answer": "https://drive.google.com/file/d/1_CumTjXF2f8lwqLRVWxiRH56ZzIXlxjA/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1_CumTjXF2f8lwqLRVWxiRH56ZzIXlxjA/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1cJmzBs7sAIVGvJ2oLgTt1oj2Y10vuQt1/view?resourcekey"
    },

    {
        "id": "3",
        "word": "puppy",
        "answer": "b",
        "choice_a": "[ə]",
        "choice_b": "[ʌ]",
        "audio_answer": "https://drive.google.com/file/d/1pSjDfoP--V69-LE6J2vkLYKwdVePeupK/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1MztrE1omcAPkOB4X0sQCOOEYaH1FWCg1/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1pSjDfoP--V69-LE6J2vkLYKwdVePeupK/view?resourcekey"
    },

    {
        "id": "4",
        "word": "hot",
        "answer": "a",
        "choice_a": "[a]",
        "choice_b": "[æ]",
        "audio_answer": "https://drive.google.com/file/d/1sY52GApTBZTUGNG_pnTvVwzW2JBzhM2y/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1sY52GApTBZTUGNG_pnTvVwzW2JBzhM2y/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/14aaVBFQ-6K-258bfqXjIsmQe3QOnayy8/view?resourcekey"
    },

    {
        "id": "5",
        "word": "eat",
        "answer": "b",
        "choice_a": "[I]",
        "choice_b": "[i]",
        "audio_answer": "https://drive.google.com/file/d/1cJmzBs7sAIVGvJ2oLgTt1oj2Y10vuQt1/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1_CumTjXF2f8lwqLRVWxiRH56ZzIXlxjA/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1cJmzBs7sAIVGvJ2oLgTt1oj2Y10vuQt1/view?resourcekey"
    },

    {
        "id": "6",
        "word": "sample",
        "answer": "a",
        "choice_a": "[ə]",
        "choice_b": "[ʌ]",
        "audio_answer": "https://drive.google.com/file/d/1MztrE1omcAPkOB4X0sQCOOEYaH1FWCg1/view?resourcekey",
        "audio_a": "https://drive.google.com/file/d/1MztrE1omcAPkOB4X0sQCOOEYaH1FWCg1/view?resourcekey",
        "audio_b": "https://drive.google.com/file/d/1pSjDfoP--V69-LE6J2vkLYKwdVePeupK/view?resourcekey"
    },
]

quiz_answer = [
    {
        "id": "1",
        "answer": "none",
        "correct": "b"
    },

    {
        "id": "2",
        "answer": "none",
        "correct": "a"
    },

    {
        "id": "3",
        "answer": "none",
        "correct": "b"
    },

    {
        "id": "4",
        "answer": "none",
        "correct": "a"
    },

    {
        "id": "5",
        "answer": "none",
        "correct": "b"
    },

    {
        "id": "6",
        "answer": "none",
        "correct": "a"
    },
]

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

    return render_template('quiz.html', data=quiz_data[int(id)-1], step=int(id), total=len(quiz_data), progress=int(int(id)/len(quiz_data)*100), answer=quiz_answer[int(id)-1])

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
