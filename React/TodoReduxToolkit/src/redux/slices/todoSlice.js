import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;