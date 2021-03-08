import axios from "../helpers/axios";
import { userConstants } from "./constants";

export const signup = (user) => async (dispatch) => {
  dispatch({ type: userConstants.SIGNUP_REQUEST });
  const res = await axios.post("/admin/signup", { ...user });
  if (res.status === 201) {
    const { message } = res.data;
    dispatch({
      type: userConstants.SIGNUP_SUCCESS,
      payload: { message },
    });
  } else {
    if (res.status === 400) {
      dispatch({
        type: userConstants.SIGNUP_FAILURE,
        payload: { error: res.data.error },
      });
    }
  }
};
