import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../Store/Slices/CounterSlice";


function IncrementButton(){

    const dispath=useDispatch();

    let add=()=>{
        dispath(increment())
    }

    return(
        <button onClick={add}>add</button>
    )
}

export default IncrementButton;