import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };
    fetch("users/register", requestOption).then((response) => {
      if (response.status === 200) navigate("/quiz", { replace: true });
    });
  }
  return (
    <div>
      <h1>Register</h1>
      <form className="form-control">
        <label htmlFor="userTextfield">Name </label>
        <input
          name="userTextfield"
          type="text"
          value={name}
          placeholder="Your email here"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="userTextfield">Email </label>
        <input
          name="emailTextfield"
          type="email"
          value={email}
          placeholder="Your name here"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="userTextfield">Password </label>
        <input
          name="passTextfield"
          type="password"
          value={password}
          placeholder="Your password here"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={(event) => submitHandler(event)}>
          Register!
        </button>
      </form>
    </div>
  );
}