import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { watcherSignUpSaga, watcherSignInSaga } from "./sagas";
import UserProfile from "./components/UserProfile";
import SignOut from "./components/auth/SignOut";
import SignIn from "./components/auth/SignIn";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem("token"),
      errorMessage: ""
    }
  },
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSignUpSaga);
sagaMiddleware.run(watcherSignInSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/feature" exact component={UserProfile} />
        <Route path='/signout' exact component={SignOut}/>
        <Route path="/signin" exact component={SignIn}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
