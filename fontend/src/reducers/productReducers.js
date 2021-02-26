import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
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
  product: {
    reviews: [],
  },
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
        product: {
          reviews: [],
        },
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
        product: {
          reviews: [],
        },
        error: action.payload,
      };

    default:
      return state;
  }
};
