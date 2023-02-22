import React, { useContext } from 'react'
import { CalcContxext } from '../context/CalcContext'
import "./Input.css"

export default function Input() {
    const { calc } = useContext(CalcContxext);

    return (
        <div className='input' max={70} mode="single">
            {calc.num ? calc.num : calc.res}
        </div>
    )
}