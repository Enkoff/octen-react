import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    all: 0,
    completed: 0
};

const todoSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload.todo);
            state.all += 1;
        },
        deleteById: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            state.all -= 1;

            if (action.payload.isChecked) {
                state.completed -=1
            }
        },
        incAndDecCompleted: (state, action) => {
            action.payload.isChecked ? state.completed -=1 : state.completed +=1
        }
    },
});

const todoReducer = todoSlice.reducer;
export const {
    addTodo,
    deleteById,
    incAndDecCompleted
} = todoSlice.actions;
export {todoReducer};
