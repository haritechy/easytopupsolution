import { DECREMENT, INCREMENT, SET_VALUE } from "../types/counterTypes";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setValue = (value: number) => ({
  type: SET_VALUE,
  payload: value,
});