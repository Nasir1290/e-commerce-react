import React from "react";
import HomePage from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import NavbarPage from "./components/common/navbar/Navbar.jsx";
import ProductsProvider from "./providers/ProductsProvider.jsx";
import Shoping from "./components/filters/Shoping.jsx";
import FooterPage from "./components/common/footer/Footer.jsx";
import OurMission from "./pages/OurMission.jsx";
import TrendingProducts from "./components/categories/TrendingProducts.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import SelectedProductProvider from "./providers/SelectedProductProvider.jsx";

function App() {
  return (
    <ProductsProvider>
      <SelectedProductProvider>
        <div>
          <NavbarPage />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<Shoping />} />
            <Route path="/mission" element={<OurMission />} />
            <Route path="/trending" element={<TrendingProducts />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="*" element={<Shoping />} />
          </Routes>
          <FooterPage />
        </div>
      </SelectedProductProvider>
    </ProductsProvider>
  );
}

export default App;
