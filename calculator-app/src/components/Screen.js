import React from 'react'
import {useContext} from "react"
import {CalcContext} from "../context/CalcContext"
import {TextFit} from 'react-textfit'

const Screen = () => {
    const {calc}= useContext(CalcContext);
  return (
    <TextFit className="screen" max={70} mode="single"> {calc.num ? calc.num : calc.res}</TextFit>
  )
}

export default Screen