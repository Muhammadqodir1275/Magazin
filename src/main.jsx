import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";

import { BrowserRouter } from "react-router-dom";
import { SavatProvider } from "./context/SavatProvider";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <SavatProvider>
      <App />
    </SavatProvider>
  </BrowserRouter>
  </Provider>
);
