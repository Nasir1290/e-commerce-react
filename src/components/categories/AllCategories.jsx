// import { Image } from "@nextui-org/react";
// import { Link } from "react-router-dom";
// import CategoryImage from "../../assets/images/category.png";

// function AllCategories() {
//   return (
//     <div className="container py-16">
//       <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
//         Shop by Category
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         <div className="relative rounded-sm overflow-hidden ">
//           <Image src={CategoryImage} alt="category 1" className="w-full" />
//           <Link
//             to={""}
//             className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium -hover:bg-opacity-60 transition"
//           >
//             Bedroom
//           </Link>
//         </div>

//         <div className="relative rounded-sm overflow-hidden ">
//           <Image src={CategoryImage} alt="category 1" className="w-full" />
//           <Link
//             to={""}
//             className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium -hover:bg-opacity-60 transition"
//           >
//             Mattress
//           </Link>
//         </div>

//         <div className="relative rounded-sm overflow-hidden ">
//           <Image src={CategoryImage} alt="category 1" className="w-full" />
//           <Link
//             to={""}
//             className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium -hover:bg-opacity-60 transition"
//           >
//             Outdoor
//           </Link>
//         </div>

//         <div className="relative rounded-sm overflow-hidden ">
//           <Image src={CategoryImage} alt="category 1" className="w-full" />
//           <Link
//             to={""}
//             className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium -hover:bg-opacity-60 transition"
//           >
//             Sofa
//           </Link>
//         </div>

//         <div className="relative rounded-sm overflow-hidden ">
//           <Image src={CategoryImage} alt="category 1" className="w-full" />
//           <Link
//             to={""}
//             className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium -hover:bg-opacity-60 transition"
//           >
//             Living Room
//           </Link>
//         </div>

//         <div className="relative rounded-sm overflow-hidden ">
//           <Image src={CategoryImage} alt="category 1" className="w-full" />
//           <Link
//             to={""}
//             className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium -hover:bg-opacity-60 transition"
//           >
//             Kitchen
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllCategories;

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { getAllCategories, getProductsByCategory } from "../../../db/dbQueries";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";

export default function AllCategories() {
  const { state, dispatch } = useProduct();
  // all unique categories and picture each of them
  const { categories, eachCategoryImage } = getAllCategories();
  const navigate = useNavigate();

  const handleNavigatePage = (event, category) => {
    event.preventDefault();

    navigate("/shop");

    dispatch({
      type: actions.products.FILTER_BY_CATEGORY,
      data: getProductsByCategory([category]),
      category: [category],
    });
  };

  return (
    <>
      <h2 className=" ml-6 font-semibold font-arial text-3xl mt-8 text-center">
        Select Your Product Category
      </h2>
      <div className=" m-6 mt-4 gap-6 grid md:grid-cols-3 sm:grid-cols-2">
        {categories.map((category, index) => (
          <Card
            shadow="sm"
            onPress={""}
            key={index}
            isPressable
            onClick={(event) => handleNavigatePage(event, category)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height={300}
                alt={category}
                className="w-full object-cover h-[140px] sm:h-[100px] hover:scale-[1.06] transition-all"
                src={eachCategoryImage[index]}
              />
            </CardBody>
            <CardFooter className=" bg-gray-200 hover:text-black text-white text-small hover:bg-white transition-all justify-center">
              <div className=" cursor-pointer border-4 border-lime-400 px-6 rounded-full bg-cyan-500 text-xl">
                {category}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
