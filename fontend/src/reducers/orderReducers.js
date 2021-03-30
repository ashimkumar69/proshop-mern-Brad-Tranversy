import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants.js";

const initialProductLists = {
  loading: false,
  success: false,
  error: false,
};

export const orderCreateReducer = (state = initialProductLists, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
