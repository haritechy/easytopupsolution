// redux/actions/authActions.ts
import axios from "axios";
import { Dispatch } from "redux";
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_DASHBOARD_SUCCESS,
    FETCH_DASHBOARD_REQUEST,
    FETCH_DASHBOARD_FAILURE
  } from "../types/dashboard"; 
import ApiParams from "@/app/contsants/apiparam";
import ApiQueryActions from "@/app/contsants/apiqurystrings";

export const Categorycountryfetch = (CustomerID: string, CategoryId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCH_CATEGORIES_REQUEST });

      const res = await axios.get(
        `https://www.easytopup.sg/api/v11/api/Res_CategoryMaster/GetList?action=Master&CustomerID=${CustomerID}&CategoryId=${CategoryId}`
      );

      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: res.data
      });
console.log(res.data)
      return { success: true };
    } catch (error: any) {
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        payload: error.message || "Something went wrong"
      });

      return { success: false, error };
    }
  };
};
export const DashBoarddetailfetch = (CustomerID: string) => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch({ type: FETCH_DASHBOARD_REQUEST });
  
        const res = await axios.get(
          `https://www.easytopup.sg/api/v11/api/Res_MyAccount/GetAccountinfo?action=${ApiQueryActions.DUE_AMOUNT}&customerid=${CustomerID}`
        );
  
        dispatch({
          type: FETCH_DASHBOARD_SUCCESS,
          payload: res.data
        });
  console.log(res.data)
        return { success: true };
      } catch (error: any) {
        dispatch({
          type: FETCH_DASHBOARD_FAILURE,
          payload: error.message || "Something went wrong"
        });
  
        return { success: false, error };
      }
    };
  };
  