import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);

const component = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(component, document.getElementById("root"));
