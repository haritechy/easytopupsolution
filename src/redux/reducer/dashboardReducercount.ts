// redux/reducers/dashboardReducer.ts
import {
    FETCH_DASHBOARD_REQUEST,
    FETCH_DASHBOARD_SUCCESS,
    FETCH_DASHBOARD_FAILURE,
  } from "../types/dashboard";
  
  interface DashboardState {
    loading: boolean;
    data: any;
    error: string;
  }
  
  const initialState: DashboardState = {
    loading: false,
    data: null,
    error: '',
  };
  
  const dashboardReducer = (state = initialState, action: any): DashboardState => {
    switch (action.type) {
      case FETCH_DASHBOARD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DASHBOARD_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: '',
        };
      case FETCH_DASHBOARD_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  