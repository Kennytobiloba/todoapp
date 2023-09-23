import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[
        

    {id:  nanoid(), name: "wake up"},
    {id: nanoid(), name: "make coffe"},
    {id: nanoid(), name: "reading"},
    
],
    toggleForm:true,
    todoUpdate:{},
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdded: (state, action) =>  { state.todos = [...state.todos, action.payload];
        },
        todosCleared: (state) =>{
            state.todos = [];
        },
        todoDelected: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        togggleInputForm: (state , action) => {
            state.toggleForm = !state.toggleForm;
            state.todoUpdate = {...state.todoUpdate, ...action.payload}
        },
        todoUpdate: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id)
            todoToUpdate.name = action.payload.name
            state.toggleForm = !state.toggleForm
        },
    },
   
   
});
export const {todoAdded , todosCleared, todoDelected, togggleInputForm, todoUpdate} = todoSlice.actions;
export default todoSlice.reducer;