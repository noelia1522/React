import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { useAuthentication } from "../AuthenticationProvider";
import Button from "@mui/material/Button";
import axios from "axios";

function ShoppingList() {
  const [listItems, setItem] = useState<any[]>([]);
  const [task, setTask] = useState("");
  const myContext = useAuthentication();
  console.log(myContext?.authData);

  let authData = myContext?.authData;
  const onLogout = myContext?.onLogout;
  const onLogin = myContext?.onLogin;
  const navigate = useNavigate();
  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    fetch("/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }

  function deleteItem(itemID: any) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: itemID }),
    };
    fetch("/tasks/remove", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getTasks();
      });
  }

  function submitHandler(e: any) {
    e.preventDefault();
    let exists = listItems.some((item) => item.task === task);

    if (!exists) {
      const formData = new FormData(e.target);
      formData.get("task");

      const requestOptions = {
        method: "POST",
        url: "/tasks",
        credentials: "include",
        headers: {
          //'Content-Type': 'application/json',
          "Content-Type": "multipart/form-data",
        },
        data: formData,
        // body: JSON.stringify({ task: value })
      };
      axios(requestOptions).then((response) => {
        console.log("OK!", response);
        getTasks();
        setTask("");
      });
    } else {
      setTask("");
    }
  }

  function logout() {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };
    // credentials
    // Controls what browsers do with credentials (cookies, HTTP authentication entries, and TLS client certificates). Must be one of the following strings:
    fetch("/users/logout", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (onLogout) onLogout();
        navigate("/login");
      })
      .catch((error) => console.log(error));
  }

  return !authData?.name ? (
    <>
      <h1>Welcome!</h1>
      <h2>Log in above to continue</h2>
    </>
  ) : (
    <div className="list">
      {listItems.length === 0 ? (
        <h1>No items yet</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          {authData.name && `${authData.name}'s`} shopping list
        </h1>
      )}

      <form onSubmit={submitHandler}>
        <label>
          Need to buy:
          <input
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ padding: "10px 20px", marginLeft: "10px" }}
          />
        </label>
        {/* <input
          type="file"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /> */}
        <MyButton color="green" text="Add" type="submit">
          Add!
        </MyButton>
      </form>

      <br />
      <br />

      <ul>
        {listItems?.map((item, index) => (
          <li className="task" key={item._id}>
            <span>{item.task}</span>

            <MyButton
              color="red"
              text="remove"
              handler={() => deleteItem(item._id)}
            />
          </li>
        ))}
      </ul>

      <Button variant="contained" onClick={logout}>
        Get me out of here!
      </Button>
    </div>
  );
}

export default ShoppingList;