import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import {
  loadProducts,
  loadCategoryProducts,
} from "../redux/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // State for loading

  const products = useSelector((state) => state.product.products);
  const selectedCategory = useSelector((state) => state.product.category);
  const productsByCategory = useSelector(
    (state) => state.product.productsByCategory
  );

  useEffect(() => {
    setLoading(true);
    selectedCategory !== "All"
      ? dispatch(loadCategoryProducts(selectedCategory)).then(() =>
          setLoading(false)
        )
      : dispatch(loadProducts()).then(() => setLoading(false));
  }, [dispatch, selectedCategory]);
  if (loading) {
    return <Loader />; // Show loader while loading
  }
  return (
    <div className="product-list">
      {selectedCategory !== "All" ? (
        <>
          {productsByCategory.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
