import React from "react";
import ProductList from "../../pages/products/ProductList";
import { getTrendingProducts } from "../../../db/dbQueries";

function TrendingProducts() {
  const trendingProducts = getTrendingProducts();
  return (
    <div id="trending">
      <h2 className=" mb-8 font-semibold font-arial text-3xl mt-8 text-center">
        Trending Products
      </h2>
      <ProductList products={trendingProducts} />
      
    </div>
  );
}

export default TrendingProducts;
