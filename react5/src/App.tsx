import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /*Challenge 1:
  const [userData, setUserData] = React.useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  React.useEffect(() => {
    getUserData();
  }, []);
  */

//Challenge 2
import React, { useState } from "react"

const SearchUser = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (


    /*Challenge 1
    <div className="App">
    <h2>User Data</h2>

    <p>
      <strong>Name:</strong> {userData.name}
    </p>
    <p>
      <strong>Website:</strong> {userData.website}
    </p>
    <p>
      <strong>Email:</strong> {userData.email}
    </p>
    <p>
      <strong>Phone:</strong> {userData.phone}
    </p>
  </div>*/
  //challenge 2
  <div>
      <input onChange={fetchData} label="Search User" />
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  
);
}


export default App;
