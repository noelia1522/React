import React from "react";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import AuthenticationProvider from "./context/AuthenticationProvider";
import RequiredAuth from "./RequiredAuth";
import Alert from "@mui/material/Alert";
import { useLoader } from "./context/LoadContext";

export default function App() {
  const generalContext = useLoader();
  const isLoading = generalContext?.isLoading;
  return (
    <div className="container">
    <AuthenticationProvider>
      {isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route
              path="/quiz"
              element={
                <RequiredAuth>
                  <Quiz />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </AuthenticationProvider>
    {generalContext?.error && (
      <Alert severity="error">{generalContext?.error}</Alert>
    )}
  </div>
);
}

