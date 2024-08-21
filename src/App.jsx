import React from "react";
import HomePage from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import NavbarPage from "./components/common/navbar/Navbar.jsx";
import ProductsProvider from "./providers/ProductsProvider.jsx";
import Shoping from "./components/filters/Shoping.jsx";
import FooterPage from "./components/common/footer/Footer.jsx";

function App() {
  return (
    <ProductsProvider>
      <div>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shoping />} />
          <Route path="*" element={<Shoping />} />
        </Routes>
        <FooterPage/>
      </div>
    </ProductsProvider>
  );
}

export default App;
