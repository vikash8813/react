import {nanoid,createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false,
            }

            state.todos.push(todo)
        }
    }
})


export const {addTodo} = todoSlice.actions

export default todoSlice.reducer