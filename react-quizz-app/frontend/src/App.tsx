import React from 'react'
import Quiz from "./Quiz"
import Register from "../pages/Register"
import Login from "../pages/Login"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/quiz" element={<Quiz/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="login" element={<Login/>}></Route>
            </Routes>
        </Router>





    </div>
  )
}
