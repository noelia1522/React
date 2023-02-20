import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingList from "./pages/ShoppingList";
import Header from "./components/Header";
import AuthenticationProvider from "./AuthenticationProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { RequiredAuth } from "./RequiredAuth";
import PrivatePage from "./pages/PrivatePage";
import { useLoader } from "./LoadContext";
import Clock from "./components/Clock";
import Footer from "./components/Footer";

//import { RequireAuth } from './RequireAuth';

function App() {
  const result = useLoader();
  const isLoading = result?.isLoading;
  console.log(isLoading);

  return (
    <AuthenticationProvider>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Router>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<ShoppingList />} />
              {/* 1. first way to do it */}
              {/* <Route
              path="/"
              element={authData.name ? <ShoppingList /> : <Login />}
            /> */}
              {/* 2. create a component to implement this checking in a more elaborated way */}
              <Route path="/" element={<ShoppingList />} />
              <Route
                path="/privatepage"
                element={
                  <RequiredAuth>
                    <PrivatePage />
                  </RequiredAuth>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/timer" element={<Clock />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      )}
    </AuthenticationProvider>
  );
}

export default App;