/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });
    case authConstants.LOGIN_SUCCESS:
      return (state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      });
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
      };
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: "error",
        loading: false,
      };
    default:
      return state;
  }
};
