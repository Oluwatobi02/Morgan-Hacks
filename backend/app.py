from flask import Flask, request, jsonify
from flask_cors import CORS

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
    
    




if __name__ == '__main__':
    app.run(debug=True)