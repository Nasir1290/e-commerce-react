import { useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";
import { getAllProducts } from "../../../db/dbQueries";
import FilteredProducts from "./FilteredProducts";
import ProductFilter from "./ProductFilter";

export default function Shoping() {
  const { state, dispatch } = useProduct();

  useEffect(() => {
    if (state.products.length === 0) {
      dispatch({
        type: actions.products.LOAD_ALL_PRODUCTS,
        data: getAllProducts(),
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Filter Section */}
      <ProductFilter />

      {/* Product Display Section */}
      <FilteredProducts products={state?.products} />
    </div>
  );
}
