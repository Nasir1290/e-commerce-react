import React from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByColor from "./FilterByColor";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";

function ProductFilter() {
  const { state, dispatch } = useProduct();

  const handleResetAllFilter = () => {
    dispatch({
      type:actions.products.RESET_ALL_FILTERS
    })
  };
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
        className=" my-4 ml-4 px-12 py-2 bg-red-500 text-white font-semibold rounded-md"
        onClick={handleResetAllFilter}
      >
        Reset All Filters
      </button>
    </aside>
  );
}

export default ProductFilter;
