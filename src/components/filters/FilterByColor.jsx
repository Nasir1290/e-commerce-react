// import React, { useEffect, useState } from "react";
// import useProduct from "../../hooks/useProduct";
// import { getPopularColors, getProductsByColor } from "../../../db/dbQueries";
// import actions from "../../actions";

// function FilterByColor() {
//   const { state, dispatch } = useProduct();
//   const [selectedColor, setSelectedColor] = useState(null);
//   let AllproductColors;

//   const handleFilterByColor = (event, color) => {
//     event.preventDefault();
//     setSelectedColor(color);
//   };

//   useEffect(() => {
//     console.log("rendering");
//     const productColors = getPopularColors(state.products);

//     AllproductColors = productColors;

//     if (selectedColor) {
//       const filteredProductByColor = getProductsByColor(
//         selectedColor,
//         state?.products
//       );

//       dispatch({
//         type: actions.products.FILTER_BY_COLOR,
//         data: filteredProductByColor,
//       });
//     }
//   }, [selectedColor, state.products]);

//   return (
//     <div className="mb-6 border-2 border-purple-500 rounded-md p-2 bg-gray-200">
//       <h4 className="font-medium mb-2">Filter by Color</h4>
//       <div className="grid grid-rows-2 grid-flow-col gap-2">
//         {AllproductColors &&
//           AllproductColors.map((color, index) => (
//             <label key={index} className="inline-flex items-center">
//               {/* <input type="checkbox" className="form-checkbox text-primary" /> */}
//               <input
//                 onClick={(event) => handleFilterByColor(event, color.color)}
//                 type="button"
//                 style={{
//                   border: `6px solid ${color.color}`,
//                   background: `${
//                     selectedColor === color.color ? color.color : ""
//                   }`,
//                 }}
//                 className={`ml-2 ] h-8 w-8 rounded-full p-2 cursor-pointer`}
//               ></input>
//             </label>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default FilterByColor;

// import React, { useState, useEffect } from "react";
// import useProduct from "../../hooks/useProduct";
// import { getPopularColors, getProductsByColor } from "../../../db/dbQueries";
// import actions from "../../actions";

// function FilterByColor() {
//   const { state, dispatch } = useProduct();
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [allProductColors, setAllProductColors] = useState([]);

//   // Fetch the popular colors when the product list is loaded or updated
//   useEffect(() => {
//     const productColors = getPopularColors(state.products);
//     setAllProductColors(productColors);
//   }, [state.products]);

//   const handleFilterByColor = (event, color) => {
//     event.preventDefault();
//     setSelectedColor(color);

//     // Dispatch the filtering action
//     const filteredProductByColor = getProductsByColor(color, state?.products);
//     dispatch({
//       type: actions.products.FILTER_BY_COLOR,
//       data: filteredProductByColor,
//     });
//   };

//   return (
//     <div className="mb-6 border-2 border-purple-500 rounded-md p-2 bg-gray-200">
//       <h4 className="font-medium mb-2">Filter by Color</h4>
//       <div className="grid grid-rows-2 grid-flow-col gap-2">
//         {allProductColors &&
//           allProductColors.map((color, index) => (
//             <label key={index} className="inline-flex items-center">
//               <input
//                 onClick={(event) => handleFilterByColor(event, color)}
//                 type="button"
//                 style={{
//                   border: `6px solid ${color}`,
//                   background: selectedColor === color ? color : "",
//                 }}
//                 className="h-8 w-8 rounded-full p-2 cursor-pointer"
//               ></input>
//             </label>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default FilterByColor;

import React, { useState, useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import { getPopularColors, getProductsByColor } from "../../../db/dbQueries";
import actions from "../../actions";

function FilterByColor() {
  const { state, dispatch } = useProduct();
  const [selectedColor, setSelectedColor] = useState(null);
  const [allProductColors, setAllProductColors] = useState([]);

  // Fetch the popular colors when the product list is loaded or updated
  useEffect(() => {
    const productColors = getPopularColors(state.products);
    setAllProductColors(productColors);
  }, [state.products, selectedColor]);

  let currentColor;

  const handleFilterByColor = (event, color) => {
    event.preventDefault();
    currentColor = color.color;
    setSelectedColor(color.color);

    // Dispatch the filtering action with the selected color
    console.log({ currentColor });
    const filteredProductByColor = getProductsByColor(
      currentColor,
      state?.products
    );
    console.log(filteredProductByColor);
    dispatch({
      type: actions.products.FILTER_BY_COLOR,
      data: filteredProductByColor,
    });
  };

  return (
    <div className="mb-6 border-2 border-purple-500 rounded-md p-2 bg-gray-100">
      <h4 className="font-medium mb-2">Filter by Color</h4>
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        {allProductColors &&
          allProductColors.map((color, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                onClick={(event) => handleFilterByColor(event, color)}
                type="button"
                style={{
                  border: `6px solid ${color.color}`,
                  background: `${selectedColor === color.color ? color.color : ""}`,
                }}
                className="h-8 w-8 rounded-full p-2 cursor-pointer"
              ></input>
            </label>
          ))}
      </div>
    </div>
  );
}

export default FilterByColor;
