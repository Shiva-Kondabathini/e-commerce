import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Rs. {product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
