import React, { useEffect, useState, useContext } from "react";
import useAxios from "../../../hooks/useAxios";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaStar } from "react-icons/fa";

const MyImport = () => {
  const axiosInstance = useAxios();
  const { user, loading: authLoading } = useContext(AuthContext);
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's import list
  useEffect(() => {
    if (authLoading) return;
    if (!user?.email) return;

    axiosInstance
      .get(`/myImport?email=${user.email}`)
      .then((res) => {
        setImports(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user, authLoading]);

  // Delete from DB + UI
  const handleRemove = (id) => {
    axiosInstance.delete(`/myImport/${id}`).then(() => {
      setImports((prev) => prev.filter((item) => item._id !== id));
    });
  };

  if (loading || authLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="px-4">
      <h1 className="text-center text-2xl text-color font-bold mb-6">
        My Imports
      </h1>

      {imports.length === 0 ? (
        <h2 className="text-center text-lg text-gray-500 mt-8">
          You haven’t imported anything yet.
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imports.map((product) => (
            <div key={product._id} className="relative">

              <div className="card bg-base-100 shadow-sm border rounded-xl overflow-hidden">

                {/* Image */}
                <figure>
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-full h-64 object-cover"
                  />
                </figure>

                <div className="card-body">
                  {/* Product Name */}
                  <h2 className="card-title text-lg">
                    {product.product_name}
                  </h2>

                  {/* Rating & Origin */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                      <FaStar />
                      <span className="text-gray-700">{product.rating}</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      <span className="font-semibold">Origin:</span>{" "}
                      {product.origin_country}
                    </p>
                  </div>

                  {/* Price */}
                  <p className="text-blue-600 font-bold text-lg mt-2">
                    ${product.price}
                  </p>

                  {/* Imported Quantity */}
                  <p className="text-gray-700 mt-1 font-medium">
                    Imported Quantity:{" "}
                    <span className="font-semibold">
                      {product.imported_quantity}
                    </span>
                  </p>

                  {/* Buttons */}
                  <div className="card-actions flex flex-col gap-2 mt-4">
                    <button
                      onClick={() => handleRemove(product._id)}
                      className="btn btn-error w-full"
                    >
                      Remove
                    </button>

                    {/* NO react-router-dom → using normal <a> */}
                    <a
                      href={`/productDetails/${product._id}`}
                      className="btn btn-primary w-full"
                    >
                      See Details
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyImport;
