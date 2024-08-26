// import React, { useState, useEffect } from "react";
// import useProduct from "../../hooks/useProduct";
// import { getPopularColors, getProductsByColor } from "../../../db/dbQueries";
// import actions from "../../actions";

// function FilterByColor() {
//   const { state, dispatch } = useProduct();
//   const [selectedColor, setSelectedColor] = useState(state.filters.colors);
//   const [allProductColors, setAllProductColors] = useState([]);

//   console.log("fromcolorFilter", state);

//   // Fetch the popular colors when the product list is loaded or updated
//   useEffect(() => {
//     const productColors = getPopularColors(state?.products);
//     setAllProductColors(productColors);
//   }, [state.products]);

//   // handle onChange color
//   const handleFilterByColor = (event, color) => {
//     event.preventDefault();
//     // If the user clicks the currently selected color, we should deselect it
//     const newSelectedColor =  selectedColor[0] === color.color ? [] : [color.color];
//     setSelectedColor(newSelectedColor);

//     // dispatch action
//     dispatch({
//       type: actions.products.FILTER_PRODUCTS,
//       colors: newSelectedColor,
//     });
//   };

//   return (
//     <div className="mb-6 border-2 border-purple-500 rounded-md p-2 bg-gray-100">
//       <h4 className="font-medium mb-2">Filter by Color</h4>
//       <div className="grid grid-rows-2 grid-flow-col gap-2">
//         {allProductColors &&
//           allProductColors.map((color, index) => (
//             <label key={index} className="inline-flex items-center">
//               <input
//                 onClick={(event) => handleFilterByColor(event, color)}
//                 type="button"
//                 style={{
//                   border: `6px solid ${color.color}`,
//                   background: `${
//                     selectedColor?.[0] === color.color ? color.color : ""
//                   }`,
//                 }}
//                 className="h-8 w-8 rounded-full p-2 cursor-pointer"
//               ></input>
//             </label>
//           ))}
//       </div>
//       {/* <button className=" my-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md"
//       onClick={()=> {
//         setSelectedColor(null)
//       }}
//       >
//         Reset
//       </button> */}
//     </div>
//   );
// }

// export default FilterByColor;




import React, { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import { getPopularColors } from "../../../db/dbQueries";
import actions from "../../actions";

function FilterByColor() {
  const { state, dispatch } = useProduct();
  const [allProductColors, setAllProductColors] = useState([]);

  // Fetch the popular colors when the product list is loaded or updated
  useEffect(() => {
    const productColors = getPopularColors(state?.products);
    setAllProductColors(productColors);
  }, [state.products]);

  // handle onChange color
  const handleFilterByColor = (event, color) => {
    event.preventDefault();
    // Toggle the selected color; if it's already selected, deselect it
    const newSelectedColor =
      state.filters.colors[0] === color.color ? [] : [color.color];

    // Dispatch action to update the global state
    dispatch({
      type: actions.products.FILTER_PRODUCTS,
      colors: newSelectedColor,
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
                  background: `${
                    state.filters.colors?.[0] === color.color ? color.color : ""
                  }`,
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
