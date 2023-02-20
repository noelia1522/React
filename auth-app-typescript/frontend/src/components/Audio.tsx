import React, { useEffect, useRef } from "react";
// import track1 from './piano.mp3'

export default function Audio() {
  const audioRef = useRef<any>(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  function stopMusic() {
    audioRef.current.pause();
  }

  function startMusic() {
    audioRef.current.play();
  }
  return (
    <>
      <audio ref={audioRef} src={require("./piano.mp3")}></audio>
      <button onClick={startMusic}>Start Playback</button>
      <button onClick={stopMusic}>Stop Playback</button>
    </>
  );
}