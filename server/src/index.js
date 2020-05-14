import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './App';
import rootStore from './redux';

import "assets/scss/material-kit-react.scss?v=1.8.0";

const store = createStore(rootStore);
console.log("store", store.getState())

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);
