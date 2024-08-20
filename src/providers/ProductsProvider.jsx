import React, { useReducer } from "react";
import ProductsContext from "../contexts/productContext";
import { initialState, ProductsReducer } from "../reducers/productsReducer";

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
