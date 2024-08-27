import { useState } from "react";
import { selectedProductContext } from "../contexts/selectedProductContext";

import React from "react";

const SelectedProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <selectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </selectedProductContext.Provider>
  );
};

export default SelectedProductProvider;
