import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsProvider from "./providers/ProductsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
        <Router>
          <App />
        </Router>
    </NextUIProvider>
  </StrictMode>
);
