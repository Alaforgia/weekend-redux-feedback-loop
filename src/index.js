import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

const feelingReducer = (state = [], action) => {
  if (action.type === "ADD_FEELING") {
    return action.payload;
  }
  return state;
};
const understandingReducer = (state = [], action) => {
  if (action.type === "ADD_UNDERSTANDING") {
    return action.payload;
  }
  return state;
};
const supportReducer = (state = [], action) => {
  if (action.type === "ADD_SUPPORT") {
    return action.payload;
  }
  return state;
};
const commentReducer = (state = [], action) => {
  if (action.type === "ADD_COMMENT") {
    return action.payload;
  }
  return state;
};
const reviewReducer = (state = [], action) => {
  if (action.type === "SHOW_FEEDBACK") {
    return action.payload;
  }
  return state;
};
const feedbackReducers = combineReducers({
  feeling: feelingReducer,
  understand: understandingReducer,
  support: supportReducer,
  comment: commentReducer,
});
export default feedbackReducers;
const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
    reviewReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
