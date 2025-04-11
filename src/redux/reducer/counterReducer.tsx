import { DECREMENT, INCREMENT, SET_VALUE } from "../types/counterTypes";


interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = (
  state = initialState,
  action: { type: string; payload?: any }
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case SET_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
