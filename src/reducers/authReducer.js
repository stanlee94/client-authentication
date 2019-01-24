import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  FLIP_PAGE
} from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state, authenticated: action.payload, errorMessage: "" };
    case SIGN_UP_FAILURE:
      return { ...state, errorMessage: action.payload, authenticated: "" };
    case SIGN_IN_SUCCESS:
      return { ...state, authenticated: action.payload, errorMessage: "" };
    case SIGN_IN_FAILURE:
      return { ...state, errorMessage: action.payload, authenticated: "" };
    case SIGN_OUT:
      return { ...state, authenticated: action.payload, errorMessage: "" };
    case FLIP_PAGE:
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};
