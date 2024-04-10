import React, { useState, useRef, useEffect } from 'react'

import WebcamComponent from './WebcamComponent';
import ShownData from '../components/shownData';

const AudioPlayer = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedChunks, setRecordedChunks]  = useState([]);
    const mediaRecorder = useRef(null);
    const [count, setCount] = useState(0)
    const [newQuestion, setNewQuestion] = useState('Hey welcome to the interview could you please tell me about yourself and some of your experiences')
    const [feedback, setFeedback] = useState('')
    const [confidence, setConfidence] = useState(0)
    const [knowledge, setKnowledge] = useState(0)
    const [clarity, setClarity] = useState(0)


    const startRecording = () => {
        setRecordedChunks([]);
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = handleDataAvailable;
            mediaRecorder.current.start();
            setIsRecording(true);
        })
        .catch(error => {
            console.log('Error accessing microphone: ', error);
        });


    }

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    const handleDataAvailable = (event) => {
        if (event.data.size > 0) {
            setRecordedChunks(recordedChunks.concat(event.data));
        }
    };

    const handleSendToBackend = () => {
        console.log('recorded chucks length', recordedChunks.length)
        if (recordedChunks.length === 0) {
            console.error('No recorded audio to send');
            return;
        }
        const blob = new Blob(recordedChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', blob, `audio${count}.wav`)
        formData.append('major', 'Computer Science')
        formData.append('job', 'Software Engineer')



        fetch('http://localhost:5000/send-audio', {
            method: 'POST', 
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send audio to the server')
            }
            console.log('Successfully sent audio to the server');
            setCount(count+1)
            return response.json();
            
        })
        .then(data => {
            console.log('Response data:', data); // Check the structure of the response
            const { next_question, feedback, confidence, knowledge, clarity } = data.result;
            setNewQuestion(next_question);
            setFeedback(feedback);
            setConfidence(confidence);
            setKnowledge(knowledge);
            setClarity(clarity);
        })
        .catch(error => {
            console.error('Error sending audio to the server: ', error);
        })
    


    }


  return (
   <div>
    <WebcamComponent />
    <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
    {recordedChunks.length > 0 && (<>
        <button onClick={handleSendToBackend}>Send</button>
        </>
    )}
    <ShownData question={newQuestion} feedback={feedback} confidence={confidence} knowledge={knowledge} clarity={clarity} />
   </div>
  )
}


export default AudioPlayer