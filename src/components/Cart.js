import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>Rs. {item.price}</p>
          <button style={{ backgroundColor: "#124e66", marginRight: "20px" }}>
            Buy Now
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
