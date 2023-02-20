import React, {useState} from 'react'

type GreetProps={
    name?:string;
}

export default function Greet(props: GreetProps) {
    const [isLoggedIn, setIsLoggedIn]= useState(false);
  return (
    <>
    <div>Hello {props.name}</div>
    <button data-testid="mybutton" 
    onClick={()=>{
        setIsLoggedIn(!isLoggedIn)
    }}>
        Log In!
    </button>
    <h1>{isLoggedIn.toString()}</h1>
    </>
  )
}
