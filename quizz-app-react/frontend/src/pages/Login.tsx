import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationProvider";

import Button from "@mui/material/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authResult = useAuthentication();
  const navigate = useNavigate();

  function submitHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    fetch("users/login", requestOption)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        authResult?.onLogin({ email: data.email, name: data.name });
        navigate("/quiz", { replace: true });
      });
  }

  return (
    <>
      <form className="form-control">
        <h1 style={{ textAlign: "center" , marginTop: "50px" }}>Login</h1>
        <div style={{textAlign:"center"}}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button variant="contained" onClick={submitHandler}>
          Login
        </Button>
        </div>
      </form>
    </>
  );
}
