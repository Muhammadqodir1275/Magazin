import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SavatProvider } from "./context/SavatProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SavatProvider>
      <App />
    </SavatProvider>
  </BrowserRouter>
);
