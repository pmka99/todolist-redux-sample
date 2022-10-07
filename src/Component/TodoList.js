import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoCom from "./TodoCom";
import '../styles/app.css'
import axios from "axios";
import { setTodo } from "../Store/Slices/SliceReducer";


function TodoList(){
    const dispath=useDispatch()

    useEffect(()=>{
        getData()
    },[])

    let getData=async()=>{
        let res=await axios.get('https://633f14db76028b55ae72f298.endapi.io/todo')
        let data=res.data.data
        dispath(setTodo(data))
    }


    const todos=useSelector(state=>state.todos.list1)
    

    return(
        <div id="todoList">
            {todos.map(item=><div key={item.id}><TodoCom item={item} key={item.id}/><br /></div>)}
        </div>
    )
}

export default TodoList;