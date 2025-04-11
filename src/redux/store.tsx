import { combineReducers, createStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer/counterReducer";


const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
