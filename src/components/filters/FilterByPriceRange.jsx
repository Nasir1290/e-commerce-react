import React, { useEffect, useRef, useState } from "react";
import { getAllProducts, getProductsByPrice } from "../../../db/dbQueries";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";

function FilterByPriceRange() {
  const { state, dispatch } = useProduct();

  const [price, setPrice] = useState({
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
  });

  const handlePriceChange = (event) => {
    // if price value become string then set value to zero;
    let priceValue =
      event.target.value === "" ? parseInt(0) : parseInt(event.target.value);

    setPrice((prevPrice) => ({
      ...prevPrice,
      [event.target.name]: priceValue,
    }));
  };

  let isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      // if (price.maxPrice > 10) {
      dispatch({
        type: actions.products.FILTER_PRODUCTS,
        minPrice: price.minPrice,
        maxPrice: price.maxPrice,
      });

      // }
    }, 2500);

    return () => clearTimeout(delayDebounceFn);
  }, [price, dispatch]);

  // Sync component state with global state on reset or filter changes
  useEffect(() => {
    setPrice({
      minPrice: state.filters.minPrice,
      maxPrice: state.filters.maxPrice,
    });
  }, [state.filters.minPrice, state.filters.maxPrice]);

  return (
    <div className="mb-6 border-2 border-indigo-500 rounded-md p-2">
      <h4 className="font-medium mb-2">Price Range</h4>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="minPrice" className="text-sm font-medium">
            Min Price:
          </label>
          <input
            id="minPrice"
            name="minPrice"
            type="number"
            className="border border-gray-300 p-1 rounded w-24"
            placeholder="$0"
            value={price.minPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="maxPrice" className="text-sm font-medium">
            Max Price:
          </label>
          <input
            id="maxPrice"
            name="maxPrice"
            type="number"
            className="border border-gray-300 p-1 rounded w-24"
            placeholder="$1000"
            value={price.maxPrice}
            onChange={handlePriceChange}
          />
        </div>
      </div>
      {/* <button
        className="my-4 px-4 py-2 bg-lime-500 text-white font-semibold rounded-md"
        onClick={handleResetFilterByPrice}
      >
        Reset
      </button> */}
    </div>
  );
}

export default FilterByPriceRange;
