// redux/store.ts
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  { thunk, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import navigationReducer from "./reducer/navigationReducer";
import authReducer from "./reducer/signinReducer";
import categoryReducer from "./reducer/dashboardReducer";
import dashboardReducer from "./reducer/dashboardReducercount";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  auth: authReducer,
  category: categoryReducer,
  dahsboardetail:dashboardReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
