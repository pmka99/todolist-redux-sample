import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        }
    }
})

export const {increment}=counterSlice.actions; 

export default counterSlice.reducer;