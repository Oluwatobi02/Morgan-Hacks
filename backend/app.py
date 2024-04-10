from flask import Flask, request, jsonify
from bson import ObjectId
from flask_cors import CORS
from majors_database import major_collection
from aimodel import generate_advice, get_next_question, generate_text
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return '<h1>Hello world</h1>'



@app.route('/send-audio', methods=['POST'])
def send_audio():
    audio = request.files['audio']
    major = request.form['major']
    print(major)
    job = request.form['job']
    print(job)
    audio_file_name = audio.filename
    file_name = audio_file_name
    print(file_name)
    audio.save(file_name)
    text = generate_text(file_name)
    print(text)
    airesponse = get_next_question(major, job, text)
    print(airesponse)
    return jsonify({'result': airesponse})
    
    
    
@app.route('/advice', methods=['POST'])
def get_advice():
    question = request.json['question']
    print(question)
    advice = generate_advice(question)
    return jsonify({'result': advice})


from bson.json_util import dumps

@app.route('/majors/')
def get_majors():
    cursor = major_collection.find()
    majors = list(cursor)
    # Convert BSON documents to Python dictionaries
    majors_dict = [majors_data for majors_data in majors]
    # Serialize Python dictionaries to JSON
    return dumps({'result': majors_dict})


@app.route('/majors/<string:major_id>')
def get_major(major_id):
    try:
        # Convert major_id to ObjectId
        object_id = ObjectId(major_id)
    except:
        # If conversion fails, return an error response
        return jsonify({'error': 'Invalid major_id'}), 400

    # Query MongoDB for the specific major using ObjectId
    major = major_collection.find_one({'_id': object_id})

    # If major is None, it means no matching major was found
    if major is None:
        return jsonify({'error': 'Major not found'}), 404

    # Convert ObjectId to string
    major['_id'] = str(major['_id'])

    # Return the found major as JSON
    return jsonify({'result': major})



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Change port number as needed
