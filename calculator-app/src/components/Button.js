import React from 'react'

const getStyleName= btn=> {
    const className={
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }
    return className[btn]
}
const Button = ({value}) => {
    const handleBtnClick=()=>{
        
         const results={
           '.':commaClick 
        }
        return results[value]()
    }
  return (
    <button  onClick={handleBtnClick} className={`${getStyleName(value)}`}>{value}</button>
  )
}

export default Button