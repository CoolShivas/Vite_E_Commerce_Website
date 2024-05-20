import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductContextProvider from "./store/ProductContextProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilterContextProvider } from "./store/FilterContext.jsx";
import { CartProvider } from "./store/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
