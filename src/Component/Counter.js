import React from "react";
import { useSelector } from "react-redux";
import IncrementButton from "./IncrementButton";



function Counter(){

    const counter=useSelector(stste=>stste.counter.value)


    return(
        <div>
            <h3>{counter}</h3>
            <IncrementButton />
        </div>
    )
}

export default Counter;