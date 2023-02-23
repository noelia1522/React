import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


//challenge 1:
const url = "https://jsonplaceholder.typicode.com/users/3";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/
/*
export const UserData = () => {

    const [userData, setUserData] = useState({});
    const url = "https://jsonplaceholder.typicode.com/users/1";

    //USING ASYNC AND AWAIT
    const getUserData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setUserData(jsonData);
    };
    //we call the useEffect hook to fetch the data from the api when the component mounts

    useEffect(() => {
        getUserData();
    }, []);


    return (
        <div>
            <h2>User Data from API</h2>
            <p><b>Name: </b> {userData.name} </p>
            <p><b>Website: </b> {userData.website}</p>
            <p><b>Phone: </b> {userData.phone}</p>
        </div>
    )
}*/


//challenge 2
/*
export const FetchFromInput = () => {

  const [usersList, setUsersList] = useState([])

  const fetchUser = (event) => {
      const username = event.target.value
      console.log(username);
      //fetch(`https://jsonplaceholder.typicode.com/users?q=${username}`)
      fetch(`https://jsonplaceholder.typicode.com/users?name=${username}`)
          .then(response => {
              return response.json()
          })
          .then(data => {
              setUsersList(data)
          })
          
  }



  return (
      <div>
          <h2>Fetch From Input Textfield</h2>
          <div style={{marginBottom : '20px'}}>
              <input onChange={fetchUser} label="Search: " placeholder='type user name'/>
              {usersList.length > 0 && (
                  <ul>
                      {usersList.map(user => (
                          <li key={user.id}>{user.name}</li>
                      ))}
                  </ul>
              )}
          </div>
      </div>
  )
}
*/

