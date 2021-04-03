import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from "../constants/orderConstants.js";

const initialOrderCreate = {
  loading: false,
  success: false,
  error: false,
};

export const orderCreateReducer = (state = initialOrderCreate, action) => {
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

const initialOrderDetails = {
  loading: false,
  error: false,
  order: {
    orderItems: [],
    shippingAddress: {},
    paymentMethod: null,
    shippingPrice: null,
    taxPrice: null,
    totalPrice: null,
    user: {
      name: null,
      email: null,
    },
    isDelivered: false,
    isPaid: false,
  },
};

export const orderDetailsReducer = (state = initialOrderDetails, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialOrderPay = {
  loading: false,
  error: false,
  success: false,
};

export const orderPayReducer = (state = initialOrderPay, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

const initialOrderListMy = {
  loading: false,
  error: false,
  orders: [],
};

export const orderListMyReducer = (state = initialOrderListMy, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        orders: action.payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_LIST_MY_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        orders: [],
      };
    default:
      return state;
  }
};
