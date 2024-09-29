// import { useState } from "react";
// import { selectedProductContext } from "../contexts/selectedProductContext";

// import React from "react";

// const SelectedProductProvider = ({ children }) => {
//   const [selectedProduct, setSelectedProduct] = useState({});
//   return (
//     <selectedProductContext.Provider
//       value={{ selectedProduct, setSelectedProduct }}
//     >
//       {children}
//     </selectedProductContext.Provider>
//   );
// };

// export default SelectedProductProvider;



import { useState, useEffect } from "react";
import { selectedProductContext } from "../contexts/selectedProductContext";
import React from "react";

// Key for localStorage
const LOCAL_STORAGE_KEY = "selectedProduct";

const SelectedProductProvider = ({ children }) => {
  // Initialize state with value from localStorage (if available)
  const [selectedProduct, setSelectedProduct] = useState(() => {
    const storedProduct = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedProduct ? JSON.parse(storedProduct) : {};
  });

  // Store the selected product in localStorage whenever it changes
  useEffect(() => {
    if (selectedProduct && Object.keys(selectedProduct).length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedProduct));
    }
  }, [selectedProduct]);

  return (
    <selectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </selectedProductContext.Provider>
  );
};

export default SelectedProductProvider;
