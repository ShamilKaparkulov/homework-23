import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    complaitedTodo(state, action) {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload) {
          el.completed = !el.completed;
        }
        return el;
      });
    },

    removeTodo(state, action) {
      const { id, completed } = action.payload;
      
      state.todos = state.todos.filter((el) => {
        if (completed === true) {
         return el.id !== id
        }
        return el
      })
    },
  },
});

export const { addTodo, complaitedTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
