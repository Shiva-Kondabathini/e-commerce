import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"></img>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>$ {item.price}</p>
              <button
                style={{ backgroundColor: "#124e66", marginRight: "20px" }}
              >
                Buy Now
              </button>
              <br></br>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
