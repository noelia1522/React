import React, {useState} from 'react'

export default function Email() {
const [email,setEmail]=useState('')
  return (
    <div>
        <input type="email" placeholder="Enter your email" data-testid="email-input"
        value={email}
        onChange={e=> setEmail(e.target.value)}/>

{email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
    </div>
  )
}
