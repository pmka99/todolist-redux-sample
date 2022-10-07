import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:'slice1',
    initialState:{
        list1:[]
    },
    reducers:{
        setTodo:(state,action)=>{
            state.list1=action.payload
        },
        apptodo:(state,action)=>{
            state.list1.push(action.payload)
            
        },
        delette:(state,action)=>{
            state.list1=state.list1.filter(item=>item.id!==action.payload)
        },
        doneSet:(state,action)=>{
            state.list1=state.list1.map(item=>item.id===action.payload
                                                ? {id:item.id,work:item.work,done:!item.done}
                                                : {id:item.id,work:item.work,done:item.done}
                                                )
            
        },
        workSet:(state,{payload})=>{
            state.list1=state.list1.map(item=>item.id===payload.id
                                                ? {id:item.id,work:payload.work,done:item.done}
                                                : {id:item.id,work:item.work,done:item.done}
                                            )
        }
    }
})

export const {apptodo,delette,doneSet,workSet,setTodo}=Slice.actions;

export default Slice.reducer;