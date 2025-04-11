"use client";

import { decrement, increment, setValue } from "@/redux/actions/counterAction";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";



export default function CounterComponent() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(decrement())}>➖</button>
      <button onClick={() => dispatch(setValue(100))}>Set to 100</button>
    </div>
  );
}
