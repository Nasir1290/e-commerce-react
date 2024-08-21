import React from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByColor from "./FilterByColor";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";
import { getAllProducts } from "../../../db/dbQueries";

function ProductFilter() {
  const navigate = useNavigate();
  const { state, dispatch } = useProduct();

  return (
    <aside className="w-full md:w-1/4 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Category Filter */}
      <FilterByCategory />

      {/* Price Range Filter */}
      <FilterByPriceRange />

      {/* Color Filter */}
      <FilterByColor />
      <button
        className=" my-4 px-12 py-2 bg-orange-500 text-white font-semibold rounded-md"
        onClick={(event) => {
          dispatch({
            type: actions.products.LOAD_ALL_PRODUCTS,
            data: getAllProducts(),
          });
        }}
      >
        Reset
      </button>
    </aside>
  );
}

export default ProductFilter;
