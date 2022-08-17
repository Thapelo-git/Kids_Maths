import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//https://www.youtube.com/watch?v=6euUmHWOH9g
const App = () => {
  const commands=[
    {
      command:'reset',
      callback:({resetTranscript})=>resetTranscript()
    },   {
      command:'colour *',
      callback:(color)=>{
        document.body.style.background=color;
      }
    }, {
      command:'alphabet *',
      callback:(alphabet)=>{
        document.documentElement=alphabet;
      }
    }
  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button onClick={SpeechRecognition.startListening({ continuous: true, })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default App;