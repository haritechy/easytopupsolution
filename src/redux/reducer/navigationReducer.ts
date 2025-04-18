// redux/reducer/navigationReducer.ts

import { GO_BACK } from "../types/navigationtypes";




const initialState = {
  back: false,
};

const navigationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GO_BACK:
      return {
        ...state,
        back: true,
      };
    default:
      return state;
  }
};

export default navigationReducer;
