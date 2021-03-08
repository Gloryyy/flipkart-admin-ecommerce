/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { orderConstants } from "../actions/constants";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
      };
      break;
  }
  return state;
};
