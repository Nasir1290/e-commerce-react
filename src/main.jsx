import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ProductsProvider from "./providers/ProductsProvider.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import SelectedProductProvider from "./providers/SelectedProductProvider.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./providers/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <SelectedProductProvider>
              <App />
            </SelectedProductProvider>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
      <ToastContainer />
    </NextUIProvider>
  </StrictMode>
);
