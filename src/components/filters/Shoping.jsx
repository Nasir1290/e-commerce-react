import { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";
import FilteredProducts from "./FilteredProducts";
import ProductFilter from "./ProductFilter";
import { useLocation } from "react-router-dom";

export default function Shoping() {
  const { state, dispatch } = useProduct();
  const [products, setProducts] = useState(state.products);
  useEffect(() => {
    if (state.products.length === 0) {
      dispatch({
        type: actions.products.LOAD_ALL_PRODUCTS,
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Filter Section */}
      <ProductFilter />
      {/* Product Display Section */}
      <FilteredProducts products={products} />
    </div>
  );
}
