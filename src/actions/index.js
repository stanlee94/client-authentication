import { SIGN_UP_SAGA, SIGN_OUT, SIGN_IN_SAGA, FLIP_PAGE } from "./types";

export const signUp = ({ email, password }, callback) => {
  return {
    type: SIGN_UP_SAGA,
    payload: {
      email,
      password,
      callback
    }
  };
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: SIGN_OUT,
    payload: ""
  };
};

export const signIn = ({ email, password }, callback) => {
  return {
    type: SIGN_IN_SAGA,
    payload: {
      email,
      password,
      callback
    }
  };
};

export const flipPage = () => {
  return {
    type: FLIP_PAGE
  };
};
