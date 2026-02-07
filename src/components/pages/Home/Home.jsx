import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { Helmet } from "react-helmet-async";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "../../ProductCard";

const Home = () => {
  const axiosInstance = useAxios();

  const [latestProducts, setLatestProducts] = useState([]);
  const [loadingLatest, setLoadingLatest] = useState(true);

  const [kitchenProducts, setKitchenProducts] = useState([]);
  const [loadingKitchen, setLoadingKitchen] = useState(true);

  // Fetch latest products
  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await axiosInstance.get("/latest-products");
        setLatestProducts(response.data);
      } catch (err) {
        console.error("Error fetching latest products:", err);
      } finally {
        setLoadingLatest(false);
      }
    };

    fetchLatestProducts();
  }, [axiosInstance]);

  // Fetch kitchen products for Home Appliance section
  useEffect(() => {
    const fetchKitchenProducts = async () => {
      try {
        const response = await axiosInstance.get("/products?category=kitchen");
        setKitchenProducts(response.data);
      } catch (err) {
        console.error("Error fetching kitchen products:", err);
      } finally {
        setLoadingKitchen(false);
      }
    };

    fetchKitchenProducts();
  }, [axiosInstance]);

  // Example data for top exporting countries
  const topCountries = [
    { name: "China", flag: "🇨🇳", exportVolume: "120M USD" },
    { name: "USA", flag: "🇺🇸", exportVolume: "95M USD" },
    { name: "Germany", flag: "🇩🇪", exportVolume: "85M USD" },
    { name: "India", flag: "🇮🇳", exportVolume: "75M USD" },
  ];

  return (
    <div className="max-w-7xl mx-auto min-h-screen md:p-4">
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Hero Section */}
      <Slider />

      {/* Latest Products Section */}
      <div className="pt-16">
        <h1 className="font-philosopher text-color pl-4 md:pl-2 text-4xl font-semibold">
          Latest Products
        </h1>

        {loadingLatest ? (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 p-4">
            {latestProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.price - product.discount_price) / product.price) * 100
              );

              return (
                <div key={product._id} className="relative">
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    -{discountPercent}%
                  </div>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Top Exporting Countries Section */}
      <div className="pt-16 px-4 md:px-0">
        <h1 className="font-philosopher text-color text-3xl font-semibold mb-6">
          Top Exporting Countries
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topCountries.map((country) => (
            <div
              key={country.name}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-black text-center"
            >
              <div className="text-4xl mb-2">{country.flag}</div>
              <h2 className="font-semibold text-black text-lg">{country.name}</h2>
              <p className="text-gray-500">{country.exportVolume}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Home Appliance Products Section */}
      <div className="pt-16 px-4 md:px-0 mb-16">
        <h1 className="font-philosopher text-color text-3xl font-semibold mb-6">
          Home Appliance
        </h1>
        {loadingKitchen ? (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 p-4">
            {kitchenProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.price - product.discount_price) / product.price) * 100
              );

              return (
                <div key={product._id} className="relative">
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    -{discountPercent}%
                  </div>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
