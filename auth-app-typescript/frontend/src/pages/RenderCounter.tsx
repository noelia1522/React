import { log } from "console";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

export default function RenderCounter() {
  const [name, setName] = useState("");
  const renderCounter = useRef(0);
  const inputRef = useRef<any>();
  const prevName = useRef("");

  useEffect(() => {
    // setRenderCounter(renderCounter + 1);
    // renderCounter.current = renderCounter.current + 1;
    // console.log("here in useEffect");
    // console.log(inputRef.current);
    inputRef.current.focus();
    prevName.current = name;
    console.log(prevName.current);

    // inputRef.current.value = "Hello!";
  }, [name]);

  function focus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input
        ref={inputRef}
        style={{ width: "200px", height: "50px" }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <div>
        {" "}
        My name is {name} and it used to be {prevName.current}
      </div>
      <div> I rendered {renderCounter.current} time</div>
      <button style={{ width: "100px", height: "40px" }} onClick={focus}>
        Click
      </button>
    </>
  );
}