import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ProductProvider} from "./context/userData";
import {CartProvider} from "./context/cart";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
