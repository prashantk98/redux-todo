import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../reducers/todoSlice";

export const store = configureStore({ reducer: { todoSliceReducer } })