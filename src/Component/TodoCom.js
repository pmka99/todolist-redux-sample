import React, { useState } from "react";
import '../styles/app.css'
import { useDispatch, useSelector } from "react-redux";
import { delette ,doneSet, workSet} from "../Store/Slices/SliceReducer";
import axios from "axios";

function TodoCom({item}){
    const dispath=useDispatch();
    const[text,textSet]=useState('');
    const[inputB,setInputB]=useState(false)


    const nowItem=useSelector(state=>state.todos.list1.filter(i=>i.id===item.id))

    let delete1=async()=>{
        try {
            let res=await axios.delete(`https://633f14db76028b55ae72f298.endapi.io/todo/${nowItem[0].id}`)
            dispath(delette(nowItem[0].id))
        } catch (error) {
            console.log(error)
        }
    }

    let edit=async()=>{
        let newTodo={id:nowItem[0].id,work:text,done:nowItem[0].done}
        try {
            let res=await axios.put(`https://633f14db76028b55ae72f298.endapi.io/todo/${nowItem[0].id}`,newTodo)
            console.log(res.data.data)
            dispath(workSet({id:nowItem[0].id,work:text}))
        } catch (error) {
            console.log(error)
        }
        setInputB(false)
    }

    let doneChange=async()=>{
        let newTodo={id:nowItem[0].id,work:nowItem[0].work,done:!nowItem[0].done}
        try {
            let res=await axios.put(`https://633f14db76028b55ae72f298.endapi.io/todo/${nowItem[0].id}`,newTodo)
            console.log(res.data.data)
            dispath(doneSet(nowItem[0].id))
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <div className="row">
            <div className="col">
                <h5>{nowItem[0].work}</h5>  
            </div>
            <div className="col">
                {
                    !nowItem[0].done
                        ?   <>
                                <button id="b1" className="btn btn-danger btn-sm" onClick={delete1}>delete</button>
                                <button id="b1" className="btn btn-secondary btn-sm" onClick={()=>setInputB(true)}>edit</button>
                                <button id="b1" className="btn btn-primary btn-sm" onClick={doneChange}>make done</button>
                                {
                                    inputB
                                        ?   <div className="input-group mt-3">
                                                <input type={"text"} className="form-control" onChange={e=>textSet(e.target.value)} value={text}></input>
                                                <button className="btn btn-success btn-sm" onClick={edit}>submit</button>
                                            </div>
                                        : ''
                                }
                                
                            </>
                        :   <button className="btn btn-danger btn-sm" onClick={delete1}>delete</button>
                }
            </div>
        </div>
    )
}

export default TodoCom;