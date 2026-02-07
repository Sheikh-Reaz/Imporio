import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const discountPercent =
    product.price && product.discount_price
      ? Math.round(
          ((product.price - product.discount_price) / product.price) * 100
        )
      : 0;

  return (
    <div className="card bg-white shadow-sm h-full">
      <figure className="relative w-full h-48 bg-white overflow-hidden">
        <img
          src={product.product_image}
          alt={product.product_name}
          className="w-full h-full object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{product.product_name}</h2>

        <div className="flex justify-between">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            {product.rating}
          </div>
          <span className="text-sm text-gray-500">
            {product.origin_country}
          </span>
        </div>

        <div className="flex gap-2">
          <span className="line-through text-gray-400">
            ${product.price}
          </span>
          <span className="text-blue-600 font-bold">
            ${product.discount_price}
          </span>
        </div>

        <Link
          to={`/productDetails/${product._id}`}
          className="btn btn-primary w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
