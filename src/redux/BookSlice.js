import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:'books',
    initialState:{
        newBook:[],
    },
    reducers:{
        addBook:(state,action)=>{
            state.newBook.push(action.payload);
        },
        removeBook:(state,action)=>{
            state.newBook = state.newBook.filter((item)=>item.id !== action.payload)
        }
    }
})

export const {addBook,removeBook} = bookSlice.actions;

export default bookSlice.reducer;