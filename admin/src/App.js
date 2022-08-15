import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//https://www.youtube.com/watch?v=6euUmHWOH9g
const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button onClick={SpeechRecognition.startListening({ continuous: true,language:'en-sotho' })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default App;