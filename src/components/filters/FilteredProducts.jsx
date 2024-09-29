import React, { useState } from "react";
import ProductCard from "../../pages/products/ProductCard";
import Paginate from "../pagination/Paginate";
import NotFound from "./NotFound";
import useProduct from "../../hooks/useProduct";

function FilteredProducts() {
  const { state, dispatch } = useProduct();
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(state.products?.length / itemsPerPage);
  const paginatedProducts = state.products?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  };
  // pagination logic
  return (
    <main className="w-full md:w-3/4 bg-gray-100 p-4 rounded shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Products card */}
        {paginatedProducts?.length >= 1 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
      {/* Repeat for more products */}

      {/* pagination */}
      {state.products?.length > 12 && (
        <Paginate
          total={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

export default FilteredProducts;
