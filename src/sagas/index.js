import { takeLatest, put } from "redux-saga/effects";
import {
  SIGN_UP_SAGA,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_SAGA,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from "../actions/types";
import signUp from "../apis/signUp";

const workerSignUpSaga = function*({ payload }) {
  try {
    const { email, password, callback } = payload;
    const response = yield signUp.post("/signup", {
      email,
      password
    });

    if (response.data.token) {
      yield put({ type: SIGN_UP_SUCCESS, payload: response.data.token });
      localStorage.setItem("token", response.data.token);
      callback();
      return;
    }

    if (response.data.error) {
      yield put({ type: SIGN_UP_FAILURE, payload: response.data.error });
      return;
    }
  } catch (e) {
    yield put({ type: SIGN_UP_FAILURE, payload: "Email is in use" });
  }
};

export const watcherSignUpSaga = function*() {
  yield takeLatest(SIGN_UP_SAGA, workerSignUpSaga);
};

const workerSignInSaga = function*({ payload }) {
    try {
      const { email, password, callback } = payload;
      const response = yield signUp.post("/signin", {
        email,
        password
      });
  
      if (response.data.token) {
        yield put({ type: SIGN_IN_SUCCESS, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
        callback();
        return;
      }
    } catch (e) {
      yield put({ type: SIGN_IN_FAILURE, payload: "Invalid Credentials" });
    }
  };

export const watcherSignInSaga = function*() {
  //yield takeLatest(SIGN_IN_SAGA, workerSignUpSaga);
  yield takeLatest(SIGN_IN_SAGA, workerSignInSaga);
};
