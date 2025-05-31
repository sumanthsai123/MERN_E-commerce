import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
);
 