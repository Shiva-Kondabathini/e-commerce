import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct, addToCart } from "../redux/actions/productActions";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true); // State for loading

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(loadProduct(id)).then(() => setLoading(false));
  }, [dispatch, id]);
  const cart = useSelector((state) => state.product.cart);
  const cartIds = cart.map((item) => item.id);

  const itemInCart = cartIds.includes(product.id);
  const navigate = useNavigate();
  function handleAddCart() {
    dispatch(addToCart(product));
    navigate("/cart");
  }
  if (loading) {
    return <Loader />; // Show loader while loading
  }
  return (
    <div className="product-detail">
      {product.image && <img src={product.image} alt={product.title} />}
      <h2>{product.title}</h2>
      <p>Rs. {product.price}</p>
      {itemInCart ? (
        <p>Item is already in cart</p>
      ) : (
        <button style={{ marginBottom: "30px" }} onClick={handleAddCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDetail;
