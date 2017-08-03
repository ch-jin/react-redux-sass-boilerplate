import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import Root from "./components/Root";
import registerServiceWorker from "./utils/registerServiceWorker";
import configureStore from "./store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
