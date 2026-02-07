import { useSearchParams } from "react-router";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import { useState } from "react";
import ProductCard from "../../ProductCard";

const AllProduct = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: products = [], isLoading } = useProducts(category);

  const filteredProducts = products
    .filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (a.discount_price || a.price) - (b.discount_price || b.price);
        case "price-high":
          return (b.discount_price || b.price) - (a.discount_price || a.price);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "latest":
        default:
          return 0;
      }
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto md:p-4 min-h-screen">
      <Helmet>
        <title>
          {category ? `${category} products` : "All Products"}
        </title>
      </Helmet>

      <h1 className="text-center py-8 text-5xl font-semibold capitalize">
        {category ? `${category} products` : "Our All Products"}
      </h1>

      {/* Search and Sort Controls */}
      <div className="my-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="w-full md:w-2/5">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleFilterChange();
              }}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-1/4">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                handleFilterChange();
              }}
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white cursor-pointer"
            >
              <option value="latest">Latest Products</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Show Items Per Page */}
          <div className="w-full md:w-1/4 flex items-center gap-2">
            <span className="font-semibold text-gray-700">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="flex-1 border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white cursor-pointer"
            >
              <option value={6}>6</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
            {paginatedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

            {paginatedProducts.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-8">
                No products found.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          {filteredProducts.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-12 pb-8 flex-wrap">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-1 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "border-2 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          )}

          {/* Showing Info */}
          {filteredProducts.length > 0 && (
            <div className="text-center pb-8 text-gray-600 text-sm">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllProduct;
