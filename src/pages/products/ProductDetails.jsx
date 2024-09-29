import React, { useEffect, useState } from "react";
import "./product.style.css";
import { useSelectedProduct } from "../../hooks/useSelectedProduct";
import ProductList from "./ProductList";
import { getProductsByCategory } from "../../../db/dbQueries";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
import toastValue from "../../components/shared/toastValue";

function ProductDetails() {
  const { selectedProduct, setSelectedProduct } = useSelectedProduct();
  const relatedProducts = getProductsByCategory(selectedProduct?.category);
  const {state,dispatch} = useCart();
  // const [allImages, setAllImages] = useState(selectedProduct.image);
  const [selectedImage, setSelectedImage] = useState(selectedProduct?.image[0]);
    const alreadyAdded = state.find((p) => p.id === selectedProduct.id);
  const handleDisplayImage = (image) => {
    setSelectedImage(image);
  };

   const handleAddToCart = (productToAdd) => {
     const find = state.find((p) => p.id === productToAdd.id);
     if (!find) {
       dispatch({
         type: "addToCart",
         product: productToAdd,
       });
       toast.success("Add to cart successfully.", toastValue);
     }
   };

  useEffect(() => {
    setSelectedImage(selectedProduct.image[0]);
  }, [selectedProduct]);

  return (
    // <div>
    //   <section className="py-8">
    //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //       <div className="grid grid-cols-1 lg:grid-cols-2">
    //         <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
    //           <div className="swiper main-slide-carousel swiper-container relative mb-6">
    //             {/* main Image */}
    //             <div className="swiper-wrapper transition-all">
    //               <div className="h-auto w-auto cursor-pointer">
    //                 <div className=" block">
    //                   <img
    //                     key={Math.round(Math.random() * 100)}
    //                     src={selectedImage}
    //                     alt="Summer Travel Bag image"
    //                     className="max-lg:mx-auto rounded-2xl w-[25rem] h-[16rem] sm:w-[38rem] sm:h-[25rem] objecover"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* main Image */}
    //           {/* small image under main image */}
    //           <div className="nav-for-slider ">
    //             <div className="swiper-wrapper h-auto">
    //               <div className="swiper-slide flex flex-wrap justify-center h-auto w-auto cursor-pointer thumbs-slide">
    //                 {selectedProduct?.image.map((img, index) => (
    //                   <img
    //                     onClick={() => handleDisplayImage(img)}
    //                     key={index}
    //                     src={img}
    //                     alt="Summer Travel Bag image"
    //                     className=" border-4 border-green-400 cursor-pointer rounded-xl w-16 h-16 sm:w-28 sm:h-28  transition-all duration-500 hover:border-indigo-600"
    //                   />
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           {/* small image under main image */}
    //         </div>

    //         {/* Details */}

    //         <div className="flex justify-center items-center">
    //           <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
    //             <div className="flex items-center justify-between gap-6 mb-6">
    //               <div className="text">
    //                 {/* product name */}
    //                 <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
    //                   {selectedProduct.name}
    //                 </h2>
    //                 <p className="font-normal text-base ">
    //                   {selectedProduct.description}
    //                 </p>
    //                 <p className="font-normal text-base text-gray-500">
    //                   {selectedProduct.category}
    //                 </p>
    //               </div>

    //               {/* add to favourite button */}

    //               <button className="group transition-all duration-500 p-0.5">
    //                 <svg
    //                   width={60}
    //                   height={60}
    //                   viewBox="0 0 60 60"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <circle
    //                     className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
    //                     cx={30}
    //                     cy={30}
    //                     r={30}
    //                     fill=""
    //                   />
    //                   <path
    //                     className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700"
    //                     d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
    //                     stroke=""
    //                     strokeWidth="1.6"
    //                     strokeMiterlimit={10}
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //               </button>
    //               {/* add to favourite button */}
    //             </div>
    //             {/* pricing and ratings */}
    //             <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
    //               <div className="flex items-center">
    //                 {/* discounted price */}
    //                 <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
    //                   $ {selectedProduct.price}{" "}
    //                 </h5>
    //                 {/* main price */}
    //                 <del className=" text-gray-700 font-md ml-2">
    //                   ${selectedProduct.discount_price}{" "}
    //                 </del>
    //                 {/* discount percentage */}
    //                 <span className="ml-3 font-semibold text-xl text-indigo-600">
    //                   {Math.round(
    //                     ((selectedProduct.price -
    //                       selectedProduct.discount_price) /
    //                       selectedProduct.price) *
    //                       100
    //                   )}
    //                   % off
    //                 </span>
    //               </div>
    //               <svg
    //                 className="mx-5 max-[400px]:hidden"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width={2}
    //                 height={36}
    //                 viewBox="0 0 2 36"
    //                 fill="none"
    //               >
    //                 <path d="M1 0V36" stroke="#E5E7EB" />
    //               </svg>
    //             </div>
    //             {/* pricing and ratings */}
    //             <button className=" my-3 flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
    //               <svg
    //                 width={18}
    //                 height={18}
    //                 viewBox="0 0 18 18"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <g clipPath="url(#clip0_12657_16865)">
    //                   <path
    //                     d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
    //                     fill="white"
    //                   />
    //                   <g clipPath="url(#clip1_12657_16865)">
    //                     <path
    //                       d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
    //                       fill="white"
    //                     />
    //                   </g>
    //                 </g>

    //                 <defs>
    //                   <clipPath id="clip0_12657_16865">
    //                     <rect width={18} height={18} fill="white" />
    //                   </clipPath>
    //                   <clipPath id="clip1_12657_16865">
    //                     <rect width={18} height={18} fill="white" />
    //                   </clipPath>
    //                 </defs>
    //               </svg>
    //               <span className="text-base font-medium text-white">
    //                 {selectedProduct.ratings}
    //               </span>
    //             </button>

    //             {/* product colors */}
    //             <p className="font-medium text-lg text-gray-900 mb-2">Colors</p>
    //             <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
    //               <div className="color-box group">
    //                 <div className=" flex gap-2">
    //                   {selectedProduct?.colors?.map((color, index) => (
    //                     <p
    //                       key={index}
    //                       className=" h-8 w-8 rounded-full border-2 border-cyan-500"
    //                       style={{ background: `${color}` }}
    //                     ></p>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //             {/* product colors */}

    //             {/* buy now button */}
    //             <button className="text-center w-full px-3 py-3 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
    //               Buy Now
    //             </button>
    //           </div>
    //         </div>

    //         {/* Details */}
    //       </div>
    //     </div>
    //   </section>

    //   {/* relatedProducts */}
    //   <div className=" flex justify-center items-center my-20">
    //     <h1 className=" text-4xl">Related Products</h1>
    //   </div>
    //   <ProductList products={relatedProducts} />
    // </div>

    <div className="container mx-auto px-4 lg:px-8">
      <section className="py-12 grid lg:grid-cols-2 gap-10">
        {/* Image section */}
        <div className="slider-box flex flex-col items-center">
          {/* Main image */}
          <div className="w-full max-w-md lg:max-w-lg mb-4">
            <img
              src={selectedImage}
              alt={selectedProduct.name}
              className="max-lg:mx-auto rounded-2xl w-[25rem] h-[16rem] sm:w-[38rem] sm:h-[25rem] object-cover"
            />
          </div>

          {/* Thumbnail images */}
          <div className="nav-for-slider flex gap-4 justify-center mt-4">
            {selectedProduct?.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => handleDisplayImage(img)}
                className={`w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  img == selectedImage
                    ? " border-5 border-purple-600 shadow-md scale-125"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details section */}
        <div className="pro-detail flex flex-col gap-y-4">
          <div className="">
            {/* Product Name */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedProduct?.name}
            </h2>
            {/* Product Description */}
            <p className="text-base text-gray-700 my-4">
              <span className=" font-bold">description:&nbsp;</span>
              {selectedProduct?.description}
            </p>
            {/* Product Category */}
            <p className=" text-md font-bold text-gray-700 mb-4">
              Category:&nbsp;{selectedProduct?.category}
            </p>

            {/* Pricing and Discount */}
            <div className="flex items-center gap-4 mb-4">
              <h5 className="text-2xl font-semibold text-gray-900">
                ${selectedProduct?.price}
              </h5>
              <del className="text-lg text-gray-500">
                ${selectedProduct?.discount_price}
              </del>
              <span className="text-xl text-indigo-600 font-semibold">
                {Math.round(
                  ((selectedProduct?.price - selectedProduct?.discount_price) /
                    selectedProduct?.price) *
                    100
                )}
                % off
              </span>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-yellow-400"
              >
                {/* Star icon SVG */}
                <path
                  d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg font-medium">
                {selectedProduct.ratings}
              </span>
            </div>
            <div className="mt-2 font-bold text-lg">
              Brand: {selectedProduct?.brand}
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-6">
            <p className="font-bold text-lg text-gray-900 mb-2">Colors:</p>
            <div className="flex gap-3">
              {selectedProduct?.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Buy Now Button */}
          <button
            onClick={() => handleAddToCart(selectedProduct)}
            className={`w-full py-2 text-lg font-semibold text-white bg-indigo-600 rounded-lg transition duration-300 ${
              alreadyAdded ? "bg-slate-500 cursor-not-allowed" : ""
            }`}
          >
            {alreadyAdded ? "Already Added" : "Add to cart"}
          </button>
        </div>
      </section>

      {/* Related Products */}
      <div className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>
        <ProductList products={relatedProducts} />
      </div>
    </div>
  );
}

export default ProductDetails;
