from flask import Flask, request, jsonify
from bson import ObjectId
from flask_cors import CORS
from majors_database import major_collection
from aimodel import generate_advice
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return '<h1>Hello world</h1>'



@app.route('/send-audio', methods=['POST'])
def send_audio():
    audio = request.files['audio']
    audio_file_name = audio.filename
    file_name = f"./audio/{audio_file_name}"
    audio.save(file_name)
    
    
@app.route('/advice', methods=['POST'])
def get_advice():
    question = request.json['question']
    advice = generate_advice(question)
    return jsonify({'result': advice})


@app.route('/majors/')
def get_majors():
    cursor = major_collection.find()
    majors = [{**doc, '_id': str(doc['_id'])} for doc in cursor]
    
    return jsonify({'result': majors})

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
    app.run(debug=True)