import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [image, setImage] = useState("./profilepic.png");
  function handleImageUpload(event: any) {
    if (event.target.files) {
      //create a url path for the selected image and we pass it as a value
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }
  function handleSave() {}
  function handleIgnore() {
    setImage("./profilepic.png");
  }
  return (
    <>
      <div className="pic-container">
        <img src={image} alt="" id="photo" />
        <label htmlFor="file" id="upload-button">
          Choose Photo
        </label>
        <input type="file" id="file" onChange={handleImageUpload} />
      </div>
      <div className="buttn-container">
        <button onClick={handleSave}>save changes</button>
        <button onClick={handleIgnore}> ignore changes </button>
      </div>
    </>
  );
}
