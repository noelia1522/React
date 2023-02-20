import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import RenderCounter from "./pages/RenderCounter";
import LoadContextProvider from "./LoadContext";
import ImageToggleOnMouseOver from "./components/ImageToggleOnMouseOver";
import Audio from "./components/Audio";
import ToggleTheme from "./components/ToggleTheme";

ReactDOM.render(
  // <ToggleTheme />,
  // <ImageToggleOnMouseOver
  //   primaryImage="./static/student.jpeg"
  //   secondaryImage="./static/bw/student.jpeg"
  // ></ImageToggleOnMouseOver>,
  // <RenderCounter></RenderCounter>,
  // <LoadContextProvider>
  <App />,
  // </LoadContextProvider>,
  document.getElementById("root")
);