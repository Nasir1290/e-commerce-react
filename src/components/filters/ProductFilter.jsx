import React from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByColor from "./FilterByColor";

function ProductFilter() {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Category Filter */}
      <FilterByCategory />

      {/* Price Range Filter */}
      <FilterByPriceRange />

      {/* Color Filter */}
      <FilterByColor />
    </aside>
  );
}

export default ProductFilter;
