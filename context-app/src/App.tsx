import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState, createContext } from "react";
import MyContextProvider from "./MyContext";

//1.
export const appleContext = createContext("unknown");
const App = () => {
  // const userName = "Valeria";

  // state parameters and handlers
  const [tasks, setTask] = useState([
    { text: " milk" },
    { text: " egg" },
    { text: " bread" },
  ]);

  return (
    //2. add the context provider as a wrapper
    <MyContextProvider>
      <div className="container">
        <Header title="Your tasks for today" />
        <Tasks tasks={tasks} />
      </div>
    </MyContextProvider>
  );
};

export default App;

