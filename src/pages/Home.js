import React from "react";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const selectedCategory = useSelector((state) => state.product.category);
  const uniqueCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="home">
      <h1>Welcome to E-Commerce</h1>
      <br></br>
      <div className="product-Categories">
        {uniqueCategories.map((category, index) => (
          <div
            className={`category-item ${
              selectedCategory === category ? "selected-category" : ""
            }`}
            key={index}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </div>
        ))}
      </div>

      <br></br>
      <ProductList />
    </div>
  );
};

export default Home;
