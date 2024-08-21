import React from "react";
import Navbar from "../components/common/navbar/Navbar.jsx";
import { CarouselItem } from "../components/Carousel";
import AllCategories from "../components/categories/AllCategories.jsx";
import Offer from "../components/Offer.jsx";
import TrendingProducts from "../components/categories/TrendingProducts.jsx";
import FooterPage from "../components/common/footer/Footer.jsx"


function HomePage() {
  return (
    <div>
      <CarouselItem />
      <AllCategories />
      <Offer />
      <TrendingProducts />
      
    </div>
  );
}

export default HomePage;
