import React, { useEffect, useState } from 'react'
import './Style.css';

//challenge 1

/*
const jsonArray = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit"
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#"
  }
]

export const Joke = () => {
  return (
    <div className='jokeContainer'>
      {
        jsonArray.map((item) => 
          
          <div key={item.id} className='joke'>
              <h3>{item.setup}</h3>
              <p>{item.punchline}</p>
          </div>
        )
      }
    </div>
  )
}
export default Joke;

*/
//challenge 2


let usersList = [{}];
export const RandomUser = () => {
    const [userArr, setUser] = useState(usersList);

    useEffect(() => {
        let fetchedUsers;
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then((res) => res.json())
            .then((data) => {
                fetchedUsers = data.map((item) => {
                    const {
                        id, avatar, username, first_name, last_name
                    } = item;
                    return { id, avatar, username, first_name, last_name }
                  })//map
                  setUser(fetchedUsers) 
/*                   setUser(data)
                  console.log(userArr); */
                  
            })
            //console.log(userArr);
    }, [])

    /* 
address: {city: 'Alvertachester', street_name: 'Doyle Springs', street_address: '390 Carolina Crossing', zip_code: '72618', state: 'Utah', …}
avatar: "https://robohash.org/etautveniam.png?size=300x300&set=set1"
credit_card: {cc_number: '4354639874509'}
date_of_birth: "1967-08-05"
emai: "carlena.paucek@email.com"
employment : {title: 'Central Consulting Representative', key_skill: 'Networking skills'}
first_name: "Carlena"
gender:"Genderqueer"
id: 2087
last_name:"Paucek"
password: "qtA1XfyKWG"
phone_number: "+507 (987) 881-8386 x8843"
social_insurance_number: "556019586"
subscription:{plan: 'Business', status: 'Idle', payment_method: 'Debit card', term: 'Monthly'}
uid:"89d2deb0-3388-4161-ba31-661a5ed0f204"
username: "carlena.paucek" */
    return (
        <><div>RandomUser Fetch API</div>
        <ul>
            {userArr.map((user) => 
            <li key={user.id}>
                <p>{user.first_name} {user.last_name}</p>
                </li>
                
            )}
        </ul>
        </>

    )
}

export default RandomUser;