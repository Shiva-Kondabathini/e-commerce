import React from "react";
import ProductDetail from "../components/ProductDetail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="product-page">
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
