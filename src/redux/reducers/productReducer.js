const initialState = {
  products: [],
  productsByCategory: [],
  product: {},
  cart: [],
  category: "All",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_PRODUCTS_BY_CATEGORY":
      return { ...state, productsByCategory: action.payload };
    case "SET_Category":
      return { ...state, category: action.payload };
    case "SET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
