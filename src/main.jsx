import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";

import { BrowserRouter } from "react-router-dom";
import { SavatProvider } from "./context/SavatProvider";
import store from "./store/store";
import { Provider } from "react-redux";
import { NotificationProvider } from "./sozlama/context/NotificationProvider";
import Testbildirishnoma from "./sozlama/NotificationList";
ReactDOM.createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <Provider store={store}>
      <BrowserRouter>
        <SavatProvider>
          <Testbildirishnoma/>
          <App />
        </SavatProvider>
      </BrowserRouter>
    </Provider>
  </NotificationProvider>
);
