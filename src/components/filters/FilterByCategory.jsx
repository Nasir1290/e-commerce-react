import React, { useEffect, useState } from "react";
import { getAllCategories, getProductsByCategory } from "../../../db/dbQueries";
import useProduct from "../../hooks/useProduct";
import actions from "../../actions";

function FilterByCategory() {
  const { state, dispatch } = useProduct();
  const { categories } = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState(
    state?.filters?.category ?? []
  );

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    let updatedCategoryList;

    if (checked) {
      // If the checkbox is checked, add the category to the selected list
      updatedCategoryList = [...selectedCategory, name];
    } else {
      // If the checkbox is unchecked, remove the category from the selected list
      updatedCategoryList = selectedCategory.filter(
        (category) => category !== name
      );
    }
    // Update the selected category state

    setSelectedCategory(updatedCategoryList);
    // Use the updated category list in the dispatch action
    dispatch({
      type: actions.products.FILTER_BY_CATEGORY,
      data: getProductsByCategory(updatedCategoryList, state.products),
      category: updatedCategoryList,
    });
  };

  return (
    <div className="mb-6 border-2 border-lime-400 rounded-md p-2 ">
      <h4 className="font-medium mb-2">Filter by Category</h4>
      <div className="flex flex-col gap-2">
        {/* mapping into all categories */}
        {categories?.map((category, index) => (
          <label
            key={index}
            className="inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCategory.includes(category)}
              onChange={handleCategoryChange}
              className="form-checkbox text-primary"
              name={category}
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
      {/* <button
        className=" my-4 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-md"
        onClick={handleClearcategoryFilter}
      >
        Reset
      </button> */}
    </div>
  );
}

export default FilterByCategory;
