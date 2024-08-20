import React, { useEffect, useState } from "react";
import { getAllProducts, getProductsByPrice } from "../../../db/dbQueries";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";

function FilterByPriceRange() {
  const { state, dispatch } = useProduct();
  const [price, setPrice] = useState({
    minPrice: Number,
    maxPrice: Number,
  });

  const handleFilterByPrice = (event) => {
    setPrice({
      ...price,
      [event.target.name]: event.target.value,
    });
    console.log(price);
  };

  useEffect(() => {
    const minPrice = parseInt(Math.round(price.minPrice));
    const maxPrice = parseInt(Math.round(price.maxPrice));

    if (maxPrice >= minPrice) {
      const products = getProductsByPrice(minPrice, maxPrice, state.products);
      dispatch({
        type: actions.products.FILTER_BY_PRICE_RANGE,
        data: products,
        minPrice: minPrice,
        maxPrice: maxPrice,
      });
      if (minPrice === 0 && maxPrice === 0 && state.products.length === 0) {
        dispatch({
          type: actions.products.LOAD_ALL_PRODUCTS,
          data: getAllProducts(),
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <div className=" mb-6 border-2 border-indigo-500 rounded-md p-2 ">
      <h4 className="font-medium mb-2">Price Range</h4>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="minPrice" className="text-sm font-medium">
            Min Price:
          </label>
          <input
            id="minPrice"
            name="minPrice"
            // defaultValue={0}
            type="number"
            className="border border-gray-300 p-1 rounded w-24"
            placeholder="$0"
            onChange={handleFilterByPrice}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="maxPrice" className="text-sm font-medium">
            Max Price:
          </label>
          <input
            id="maxPrice"
            name="maxPrice"
            // defaultValue={0}
            type="number"
            className="border border-gray-300 p-1 rounded w-24"
            placeholder="$1000"
            onChange={handleFilterByPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterByPriceRange;
