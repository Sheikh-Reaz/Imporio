import React from "react";

const Delivery = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section - Ref Image Style */}
      <div className="bg-blue-600 rounded-lg mx-4 md:mx-16 my-12 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="text-white max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Delivery & Return</h1>
          <p className="text-white text-base md:text-lg">
            Free delivery available on 1000s of products over $100. Choose a specific delivery date & time that suits you for an additional fee.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex-shrink-0">
          <img
            src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/delivery.png.webp"
            alt="Delivery Boxes"
            className="w-48 md:w-64"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/delivery-img-icon-1.svg",
            title: "Free Delivery",
            description: "Free delivery on all orders over $50."
          },
          {
            icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/delivery-img-icon-2.svg",
            title: "Fast Shipping",
            description: "We ensure fast and reliable shipping worldwide."
          },
          {
            icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/delivery-img-icon-3.svg",
            title: "Secure Packaging",
            description: "Your items are carefully packed to prevent damage."
          },
          {
            icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/delivery-img-icon-4.svg",
            title: "Track Your Order",
            description: "Easily track your orders online with our system."
          }
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg p-6 flex flex-col items-center text-center transition"
          >
            <img src={feature.icon} alt={feature.title} className="mb-4 w-16 h-16" />
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
