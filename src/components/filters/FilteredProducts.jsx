import React, { useState } from "react";
import ProductCard from "../../pages/products/ProductCard";
import Paginate from "../pagination/Paginate";
import NotFound from "./NotFound";

function FilteredProducts({ products }) {
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      {products.length > 12 && (
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
