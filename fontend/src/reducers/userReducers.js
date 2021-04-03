import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
} from "../constants/userConstants";

const initialUserLoginReducer = { loading: false, error: false };

export const userLoginReducer = (state = initialUserLoginReducer, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
const initialUserRegisterReducer = { loading: false, error: false };

export const userRegisterReducer = (
  state = initialUserRegisterReducer,
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialUserDetailsReducer = { loading: false, error: false, user: {} };

export const userDetailsReducer = (
  state = initialUserDetailsReducer,
  action
) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: false,
      };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_DETAILS_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        user: {},
      };

    default:
      return state;
  }
};

const initialUserUpdateProfileReducer = {
  loading: false,
  error: false,
  success: false,
};

export const userUpdateProfileReducer = (
  state = initialUserUpdateProfileReducer,
  action
) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        success: true,
        error: false,
      };
    case USER_UPDATE_PROFILE_FAIL:
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
