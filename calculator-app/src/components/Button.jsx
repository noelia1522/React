import React, { useContext } from 'react'
import { CalcContxext } from '../context/CalcContext';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}


export default function Button(props) {
    const { calc, setCalc } = useContext(CalcContxext)

    //User click comma
    const commaClick = () => {
        setCalc({
            ...calc,
            num: 29
        })
    }


    const handleBtnClick = () => {
        let value = props.children;
        //console.log(props.children)
        const results = {
            '.': commaClick
        }
        return results[value]()
    }


    return (
        <div onClick={handleBtnClick} className={
            `buttonWrapper ${isOperator(props.children) ? null : "operator"
            }`
        }>
            {props.children}
        </div>
    )
}