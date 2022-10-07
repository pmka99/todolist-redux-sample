import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {apptodo} from '../Store/Slices/SliceReducer';


function AppTodo(){
    const[text,setText]=useState('');
    
    const dispath=useDispatch();

    let add=async()=>{
        let newTodo={work:text,done:false}

        try {
            let res=await axios.post(`https://633f14db76028b55ae72f298.endapi.io/todo`,newTodo)
            let id=res.data.data.id
            dispath(apptodo({id:id,work:text,done:false}))
            setText('')
        } catch (error) {
            console.log(error)
        }

        
    }

    return(
        <div className="input-group mt-3">
            <input type={"text"} className="form-control" onChange={e=>setText(e.target.value)} value={text}></input>
            <button className="btn btn-success" onClick={add}>submit</button>
        </div>
    )
}

export default AppTodo;