import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
} from "../constants/productConstants";

const initialProductLists = {
  products: [],
  loading: false,
  error: false,
};

export const productListReducer = (state = initialProductLists, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [], error: false };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialProductDetails = {
  loading: false,
  error: false,
};

export const productDetailsReducer = (
  state = initialProductDetails,
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: false,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialProductDelete = {
  loading: false,
  error: false,
  success: false,
};

export const productDeleteReducer = (state = initialProductDelete, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case PRODUCT_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialProductCreate = {
  loading: false,
  error: false,
  success: false,
  product: null,
};

export const productCreateReducer = (state = initialProductCreate, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        product: action.payload,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case PRODUCT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

const initialProductUpdate = {
  loading: false,
  error: false,
  success: false,
  product: {},
};

export const productUpdateReducer = (state = initialProductUpdate, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        product: action.payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };

    default:
      return state;
  }
};
