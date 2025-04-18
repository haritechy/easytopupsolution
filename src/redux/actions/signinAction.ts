// redux/actions/authActions.ts
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/sigintypes";
import { Dispatch } from "redux";
import ApiBaseUrls from "@/app/contsants/apiendpoints";
import ApiParams from "@/app/contsants/apiparam";


export const loginUser = (UserID: string, Password: string) => {
    return async (dispatch: Dispatch) => {
      try {
        const res = await axios.get(
          `${ApiBaseUrls.BASE_URL}${ApiBaseUrls.GET_LOGIN}?${ApiParams.USER_ID}=${UserID}&${ApiParams.PASSWORD}=${Password}`
        );
  
        const data = res.data;
  
        // ✅ Instead of checking status, check for token or CustomerID
        if (data.token && data.CustomerID) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
          });
  
          return { success: true };
        } else {
          dispatch({ type: LOGIN_FAILURE });
          return { success: false };
        }
      } catch (error) {
        dispatch({ type: LOGIN_FAILURE });
        return { success: false, error };
      }
    };
  };