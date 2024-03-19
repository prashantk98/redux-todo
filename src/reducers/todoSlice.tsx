import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface TodoListType {
  id: string;
  text: string;
  isComplete: boolean;
}
const initialState: TodoListType[] = [{
  id: nanoid(),
  text: 'Inital Todo',
  isComplete: false
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
        isComplete: false
      });
      return state;
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
      return state;
    },
    editTodo: (state, action) => {
      // console.log(action);
      
      state = state.map((item) => (item.id === action.payload.id ? { ...item, text: action.payload.newValue } : item));
      // console.log(state);
      return state;
      
    },
    toggleComplete: (state, action) => {
      console.log("togglecomplete" ,action);
      
      state = state.map((todo) => todo.id === action.payload.id ? { ...todo, isComplete: !todo.isComplete } : todo);
      // console.log(state);
      return state;
    }
  }
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo,toggleComplete } = todoSlice.actions;