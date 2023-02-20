import { useState, useEffect, useRef } from "react";


import "./Clock.css";
//https://codesandbox.io/s/goofy-mendel-77mvqx?file=/src/styles.css:0-304
function Content() {
  const [count, setCount] = useState(20);
  const [isFinished, setIsFinished] = useState(false);
  const timerIdRef = useRef<ReturnType<typeof setInterval> | undefined>();
  let prevCount = useRef(21);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRestart = () => {
    setCount(20);

    handleStart();
  };
  const handleStart = () => {
    timerIdRef.current = setInterval(() => {
      console.log(prevCount);

      if (prevCount.current >= 1) setCount((prev) => prev - 1);
      if (prevCount.current === 7) {
        console.log("here in audio");
        audioRef?.current?.play();
        return;
      }
      if (prevCount.current === 1) {
        setIsFinished(true);
        handleStop();
      }
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerIdRef.current);
  };

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const h1Ref = useRef(null);
  // let h1Rect = useRef();
  useEffect(() => {
    // h1Rect.current = h1Ref.current.getBoundingClientRect();
  });
  return (
    <div>
      <h1 ref={h1Ref}>{count} </h1>
      <h2>{prevCount.current || (isFinished && "Time's out!")}</h2>
      <button onClick={handleStart}>Start </button>
      <button onClick={handleStop}>Stop </button>
      <button onClick={handleRestart}>ReStart</button>
      <audio ref={audioRef} src={require("./timeout.mp3")}></audio>
      {/* <p>{JSON.stringify(h1Rect.current)}</p> */}
    </div>
  );
}

export default Content;