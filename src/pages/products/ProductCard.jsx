// import { Image } from "@nextui-org/react";
// import React from "react";

// import { Link } from "react-router-dom";
// function ProductCard({ product }) {

//   const stars = Array(Math.round(product?.ratings)).fill("");

//   return (
//     <div className="bg-white shadow rounded overflow-hidden group">
//       <div className="relative overflow-hidden">
//         <Image
//           src={product.image[0]}
//           width={500}
//           height={300}
//           quality={100}
//           alt="product 1"
//           className="w-[500px] h-[300px]"
//         />

//         <div
//           className="absolute inset-0 bg-black bg-opacity-40 flex items-center
//           justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
//         >
//           <Link
//             to=""
//             className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
//             title="view product"
//           >
//             <i className="fa-solid fa-magnifying-glass" />
//           </Link>
//           <Link
//             to=""
//             className="text-white text-lg w-9 h-8 rounded-full bg-orange-200 flex items-center justify-center hover:bg-gray-800 transition"
//             title="add to wishlist"
//           ></Link>
//         </div>
//       </div>

//       <div className="pt-4 pb-3 px-4">
//         <Link to="">
//           <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
//             {product?.name}
//           </h4>
//         </Link>
//         <div className="flex items-baseline mb-1 space-x-2">
//           <p className="text-xl text-primary font-semibold">
//           💲{product?.discount_price}
//           </p>
//           <p className="text-sm text-gray-400 line-through">💲{product?.price}</p>
//         </div>
//         <div className="flex items-center">
//           {/*  handle Ratings*/}
//           <div className="flex gap-1 text-sm text-yellow-400">
//             {stars.map((star, index) => (
//               <span key={index}>
//                 ⭐
//               </span>
//             ))}
//           </div>
//           {/* handle ratings */}
//           <div className="text-xs text-gray-500 ml-3">Sku:{product?.sku}</div>
//         </div>
//       </div>
//       <Link
//         href="#"
//         className=" block bottom-0 w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
//       >
//         Add to cart
//       </Link>
//     </div>
//   );
// }

// export default ProductCard;

import { Image } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const stars = Array(Math.round(product?.ratings)).fill("");

  return (
    <div className="bg-white shadow rounded overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden">
        {/* <button>
          <Image
            src={product.image[0]}
            width={500}
            height={300}
            quality={100}
            alt="product 1"
            className="w-[500px] h-[300px] hover:opacity-[.3]"
          />
        </button> */}

        <button className="relative group">
          <Image
            src={product.image[0]}
            width={500}
            height={300}
            quality={100}
            alt="product 1"
            className="w-[500px] h-[300px] group-hover:opacity-40 transition-opacity duration-300 hover:scale-[1.08]"
          />
        </button>

        <div
          className="absolute inset-0 bg-black bg-opacity-10 flex items-center 
          justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <Link
            to=""
            className="text-white text-lg w-12 h-12 font-bolder rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            {/* <i className="fa-solid fa-magnifying-glass" /> */}
            <svg
              stroke="white"
              fill="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
          <Link
            to=""
            className="text-white text-lg w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <svg
              stroke="red"
              fill="red"
              strokeWidth="4"
              viewBox="0 0 512 512"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="pt-4 pb-3 px-4 flex-grow">
        <Link to="">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.name}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            💲{product?.discount_price}
          </p>
          <p className="text-sm text-gray-400 line-through">
            💲{product?.price}
          </p>
        </div>
        <div className="flex items-center">
          {/*  handle Ratings*/}
          <div className="flex gap-1 text-sm text-yellow-400">
            {stars.map((star, index) => (
              <span key={index}>⭐</span>
            ))}
          </div>
          {/* handle ratings */}
          <div className="text-xs text-gray-500 ml-3">Sku:{product?.sku}</div>
        </div>
      </div>
      <Link
        to=""
        className="mt-auto block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </Link>
    </div>
  );
}

export default ProductCard;
