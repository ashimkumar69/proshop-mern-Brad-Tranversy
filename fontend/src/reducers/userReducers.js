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
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
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

const initialUserListReducer = {
  loading: false,
  error: false,
  users: [],
};

export const userListReducer = (state = initialUserListReducer, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        users: action.payload,
      };
    case USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LIST_RESET:
      return {
        ...state,
        loading: true,
        error: false,
        users: [],
      };

    default:
      return state;
  }
};

const initialDeleteUserReducer = {
  loading: false,
  error: false,
  success: false,
};

export const deleteUserReducer = (state = initialDeleteUserReducer, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case USER_DELETE_FAIL:
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

const initialUserUpdateReducer = {
  loading: false,
  error: false,
  success: false,
  user: {},
};

export const userUpdateReducer = (state = initialUserUpdateReducer, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case USER_UPDATE_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        error: false,
        user: {},
      };

    default:
      return state;
  }
};
