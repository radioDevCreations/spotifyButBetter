import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App/App";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { Reset } from "styled-reset";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
