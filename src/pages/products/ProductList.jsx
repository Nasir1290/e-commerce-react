import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Paginate from "../../components/pagination/Paginate";

function ProductList({ products }) {
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

  return (
    <>
      {paginatedProducts?.length > 1 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 m-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="">
          {
            <div className=" ml-12 justify-center items-center text-lg">
              <h2 className=" text-xl text-red-500 items-center text-center">
                No results found.
              </h2>
              <p className=" text-red-600 text-center">
                Try a different search term or browse by category:
              </p>
              <ul className=" flex flex-col items-center justify-center mt-4 ">
                {categories.map((category) => (
                  <li
                    className=" bg-black text-white font-bold px-3 py-2 mb-2 rounded-md w-[10rem]"
                    key={category}
                  >
                    <Link href={`/shop?category=${category}`}>
                      {" "}
                      <span className=" text-cyan-500 font-bold mr-2">
                        --&gt;
                      </span>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      )}
      {products.length > 12 && (
        <Paginate
          total={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default ProductList;
