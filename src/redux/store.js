import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./BookSlice";

const appStore = configureStore({
    reducer:{
       books: bookReducer
    }
})

export default appStore;