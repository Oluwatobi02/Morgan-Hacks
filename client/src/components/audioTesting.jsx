// import React, { useEffect } from 'react';
// import elevenLabs from 'elevenlabs-js'; // Import the Eleven Labs SDK

// function AudioTest() {
//   useEffect(() => {
//     // Set your API key
//     elevenLabs.setApiKey('12cac17112c1536fcc60742191d4c4df');

//     // Call the text-to-speech API
//     elevenLabs.textToSpeech(
//       "YIKne3meq5aSn9XLyUdCD", // Your audio ID
//       "Hello World!", // Text to convert to speech
//       "elevenlabs_multilingual_v2", // Voice model
//       {
//         stability: 0.95,
//         similarity_boost: 0.75,
//         style: 0.06,
//         use_speaker_boost: true
//       }
//     ).then(async (res) => {
//       const pipe = await res.pipe;
//       console.log("pipe", pipe);
//       // you can use pipe for what you want
//     });
//   }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

//   return (
//     <div>
//       <h1>Text to Speech Test</h1>
//       {/* Add any JSX elements you want */}
//     </div>
//   );
// }

// export default AudioTest;
