import React, { useState, useRef } from 'react'

import WebcamComponent from './WebcamComponent';

const AudioPlayer = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedChunks, setRecordedChunks]  = useState([]);
    const mediaRecorder = useRef(null);
    const [count, setCount] = useState(0)

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
    const handleDownload = () => {
        if (recordedChunks === 0) {
            console.log('No data to download');
            return;
        }
        const blob = new Blob(recordedChunks, { type: 'audio/wav' });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recorded_audio.wav';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

    }
    const handleSendToBackend = () => {
        console.log('recorded chucks length', recordedChunks.length)
        if (recordedChunks.length === 0) {
            console.error('No recorded audio to send');
            return;
        }
        const blob = new Blob(recordedChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', blob, `audio${count}.wav`)


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
        .then((data) => {
            console.log(data.text)
        })
        .catch(error => {
            console.error('Error sending audio to the server: ', error);
        })
    }

  return (
   <div>
    {/* <VideoComponent /> */}
    <WebcamComponent />
    <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
    {recordedChunks.length > 0 && (<>
        <button onClick={handleDownload}>Download Recording</button>
        <button onClick={handleSendToBackend}>Send to backend</button>
        </>
    )}
   </div>
  )
}


export default AudioPlayer