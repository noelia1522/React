import React, {useEffect} from "react";
import Quiz from "./pages/Quiz"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import Header from "./components/Header";
import AuthenticationProvider from "./context/AuthenticationProvider";
import RequiredAuth from "./RequiredAuth";
import Alert from "@mui/material/Alert";
import { useLoader } from "./context/LoadContext";


export default function App() {
  const generalContext = useLoader();
  const isLoading = generalContext?.isLoading;

  useEffect(()=>{
    const errorTimeOut= setTimeout(()=>{
      generalContext?.setError(null)
    },3000)

    return()=>{
      clearTimeout(errorTimeOut);
    }
  }, [generalContext]);


  return (
    <div className="container">
    <AuthenticationProvider>
    {!generalContext?.error && isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route
              path="/quiz"
              element={
                <RequiredAuth>
                  <Quiz></Quiz>
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      )}
    </AuthenticationProvider>
   {/* {generalContext?.error && (
      <Alert severity="error">{generalContext?.error}</Alert>
    )}*/}
  </div>
);
}

