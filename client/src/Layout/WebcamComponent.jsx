import React, { useEffect, useRef } from 'react';

const WebcamComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to start the webcam feed
    const startWebcam = async () => {
      try {
        // Ask for the media devices
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        // If the videoRef is current, set its source object to the stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the device's camera.", error);
      }
    };

    startWebcam();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
    </div>
  );
};

export default WebcamComponent;
