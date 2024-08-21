// import React, { useEffect, useState } from "react";
// import { getAllProducts, getProductsByPrice } from "../../../db/dbQueries";
// import useProduct from "../../hooks/useProduct";
// import actions from "../../actions";

// function FilterByPriceRange() {
//   const { state, dispatch } = useProduct();
//   const [price, setPrice] = useState({
//     minPrice: Number,
//     maxPrice: Number,
//   });

//   const handleFilterByPrice = (event) => {
//     setPrice({
//       ...price,
//       [event.target.name]: event.target.value,
//     });
//   };

//   useEffect(() => {
//     const minPrice = parseInt(Math.round(price.minPrice));
//     const maxPrice = parseInt(Math.round(price.maxPrice));

//     if (maxPrice >= minPrice) {
//       const products = getProductsByPrice(minPrice, maxPrice, state.products);
//       dispatch({
//         type: actions.products.FILTER_BY_PRICE_RANGE,
//         data: products,
//         minPrice: minPrice,
//         maxPrice: maxPrice,
//       });
//       if (state.products.length === 0) {
//         dispatch({
//           type: actions.products.LOAD_ALL_PRODUCTS,
//           data: getAllProducts(),
//         });
//       }
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [price]);

//   return (
//     <div className=" mb-6 border-2 border-indigo-500 rounded-md p-2 ">
//       <h4 className="font-medium mb-2">Price Range</h4>
//       <div className="flex flex-col gap-2">
//         <div className="flex items-center justify-between">
//           <label htmlFor="minPrice" className="text-sm font-medium">
//             Min Price:
//           </label>
//           <input
//             id="minPrice"
//             name="minPrice"
//             // defaultValue={0}
//             type="number"
//             className="border border-gray-300 p-1 rounded w-24"
//             placeholder="$0"
//             onChange={handleFilterByPrice}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <label htmlFor="maxPrice" className="text-sm font-medium">
//             Max Price:
//           </label>
//           <input
//             id="maxPrice"
//             name="maxPrice"
//             // defaultValue={0}
//             type="number"
//             className="border border-gray-300 p-1 rounded w-24"
//             placeholder="$1000"
//             onChange={handleFilterByPrice}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterByPriceRange;

// import React, { useEffect, useState } from "react";
// import { getAllProducts, getProductsByPrice } from "../../../db/dbQueries";
// import useProduct from "../../hooks/useProduct";
// import actions from "../../actions";

// function FilterByPriceRange() {
//   const { state, dispatch } = useProduct();
//   const [price, setPrice] = useState({
//     minPrice: 0,
//     maxPrice: 0, // Set a sensible default
//   });

//   const handleFilterByPrice = (event) => {
//     setPrice({
//       ...price,
//       [event.target.name]: event.target.value,
//     });
//   };

// let change;
//   const handleResetFilterByPrice = () => {
//     let newPrice = {
//       ...price,
//       minPrice: 0,
//       maxPrice: 0,
//     };
//     setPrice(newPrice);
//     change=price
//   };

//   // Load all products if they aren't already loaded
//   useEffect(() => {
//     if (state.products.length === 0) {
//       dispatch({
//         type: actions.products.LOAD_ALL_PRODUCTS,
//         data: getAllProducts(),
//       });
//     }
//   }, [state.products.length, dispatch]);

//   useEffect(() => {
//     console.log("render change");
//     const minPrice = parseInt(price.minPrice) || 0;
//     const maxPrice = parseInt(price.maxPrice) || 0; // Set a fallback value

//     if (maxPrice > minPrice) {
//       const filteredProducts = getProductsByPrice(
//         minPrice,
//         maxPrice,
//         state.products
//       );
//       dispatch({
//         type: actions.products.FILTER_BY_PRICE_RANGE,
//         data: filteredProducts,
//         minPrice: minPrice,
//         maxPrice: maxPrice,
//       });
//     }

//     if (maxPrice < minPrice) {
//       const filteredProducts = getProductsByPrice(
//         minPrice,
//         maxPrice,
//         state.products
//       );
//       dispatch({
//         type: actions.products.FILTER_BY_PRICE_RANGE,
//         data: filteredProducts,
//         minPrice: minPrice,
//         maxPrice: maxPrice,
//       });
//     }
//   }, [price, price.minPrice, price.maxPrice]);

//   return (
//     <div className="mb-6 border-2 border-indigo-500 rounded-md p-2">
//       <h4 className="font-medium mb-2">Price Range</h4>
//       <div className="flex flex-col gap-2">
//         <div className="flex items-center justify-between">
//           <label htmlFor="minPrice" className="text-sm font-medium">
//             Min Price:
//           </label>
//           <input
//             id="minPrice"
//             name="minPrice"
//             type="number"
//             className="border border-gray-300 p-1 rounded w-24"
//             placeholder="$0"
//             value={price.minPrice}
//             onChange={handleFilterByPrice}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <label htmlFor="maxPrice" className="text-sm font-medium">
//             Max Price:
//           </label>
//           <input
//             id="maxPrice"
//             name="maxPrice"
//             type="number"
//             className="border border-gray-300 p-1 rounded w-24"
//             placeholder="$1000"
//             value={price.maxPrice}
//             onChange={handleFilterByPrice}
//           />
//         </div>
//       </div>
//       <button
//         className=" my-4 px-4 py-2 bg-lime-500 text-white font-semibold rounded-md"
//         onClick={handleResetFilterByPrice}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default FilterByPriceRange;

import React, { useEffect, useState } from "react";
import { getAllProducts, getProductsByPrice } from "../../../db/dbQueries";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";

function FilterByPriceRange() {
  const { state, dispatch } = useProduct();
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
    let allProducts = state?.products;

    if(minPrice ===0 && maxPrice===0) {
      dispatch({
        type: actions.products.FILTER_BY_PRICE_RANGE,
        data: allProducts,
        minPrice,
        maxPrice,
      });
    }

  const handleFilterByPrice = (event) => {
    setPrice((prevPrice) => ({
      ...prevPrice,
      [event.target.name]: event.target.value,
    }));
  };

  const handleResetFilterByPrice = () => {
    setPrice({
      minPrice: 0,
      maxPrice: 0,
    });
  };

  // Load all products if they aren't already loaded
  useEffect(() => {
    if (state.products.length === 0) {
      dispatch({
        type: actions.products.LOAD_ALL_PRODUCTS,
        data: getAllProducts(),
      });
    }
  }, [state.products.length, dispatch]);

  useEffect(() => {
    
    const minPrice = parseInt(price.minPrice) || 0;
    const maxPrice = parseInt(price.maxPrice) || 0;

    if (maxPrice >= minPrice) {
      const filteredProducts = getProductsByPrice(
        minPrice,
        maxPrice,
        state.products
      );

      // Dispatch only if the new filtered products are different from the current state
      if (
        filteredProducts?.length !== state?.filteredProducts?.length ||
        filteredProducts?.some((prod, index) => prod?.id !== state?.filteredProducts[index]?.id)
      ) {
        dispatch({
          type: actions.products.FILTER_BY_PRICE_RANGE,
          data: filteredProducts,
          minPrice,
          maxPrice,
        });
      }
    }
  }, [price]);

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
            type="number"
            className="border border-gray-300 p-1 rounded w-24"
            placeholder="$1000"
            value={price.maxPrice}
            onChange={handleFilterByPrice}
          />
        </div>
      </div>
      <button
        className="my-4 px-4 py-2 bg-lime-500 text-white font-semibold rounded-md"
        onClick={handleResetFilterByPrice}
      >
        Reset
      </button>
    </div>
  );
}

export default FilterByPriceRange;
