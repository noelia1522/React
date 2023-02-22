import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";


export default function Login(){
    const [password, setPassword]= useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    function submitHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        };
        fetch("users/register", requestOption).then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          } else navigate("/quiz", { replace: true });
        });
      }

return(
    <>
    <form className="form-control">
        <h1 style={{textAlign: "center"}}>Login</h1>
        <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
        </label>
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
        </label>
        <Button variant="contained" onClick={submitHandler}>
            Log In
        </Button>
    </form>
    </>
);
}

