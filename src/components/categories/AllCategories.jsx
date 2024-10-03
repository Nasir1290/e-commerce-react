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
    // dispatch action
    dispatch({
      type: actions.products.FILTER_PRODUCTS,
      categories: [category],
    });

    navigate("/shop");
  };

  return (
    <>
      <h2 className=" ml-6 font-semibold font-arial text-3xl mt-8 text-center">
        Select Your Product Category
      </h2>
      <div className=" m-6 mt-4 gap-6 grid md:grid-cols-3 sm:grid-cols-2">
        {categories.map((category, index) => (
          <Card
            data-aos="fade-up" // Specify the animation type
            data-aos-duration="300" // Animation duration in milliseconds
            data-aos-easing="ease-all"

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
