import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
  id: nanoid(),
  text: 'Inital Todo'
}]
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action);
      
      state.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      console.log(action);
      
      state = state.map((item) => (item.id === action.payload.id ? action.payload.newValue : item));
    }
  }
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;