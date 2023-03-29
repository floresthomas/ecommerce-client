import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, handleAddProduct }) {
  return (
    <div className="card bg-white w-[270px] h-[340px] m-2 rounded-lg shadow-lg">
      <div className="top">
        <Link to={`/detail/${product._id}`}>
          <img
            className="w-[200px] h-[200px] object-cover ml-11 p-2"
            src={product.images}
            alt={product.title}
          />
        </Link>
      </div>
      <div className="bottom flex flex-col justify-center items-start p-3 bg-">
        <div className="title font-semibold text-xs my-1">{product.title}</div>
        <div className="category text-xs font-light my-1">
          {product.brand}
        </div>

        <div className="pricing flex items-center">
          <div className="price ">${product.price}</div>
        </div>
        <div className="flex items-center my-2">
          <button
            className="border px-2 py-1 text-xs rounded-lg mr-1"
            onClick={() => handleAddProduct(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
