import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 0, title: "Task 1", completed: false },
    { id: 1, title: "Task 2", completed: false },
    { id: 2, title: "Task 3", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      };
      state.unshift(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });

      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      console.log("state", state);
      console.log("action", action.payload);
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      state[index].title = action.payload.title;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
