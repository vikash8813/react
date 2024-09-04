import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlices.js'


export const store = configureStore({
    reducer: todoReducer,
})