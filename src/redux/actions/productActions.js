import {
  fetchProducts,
  fetchProductById,
  fectProductsByCategory,
} from "../../api";

export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});
export const setProductsByCategory = (productsByCategory) => ({
  type: "SET_PRODUCTS_BY_CATEGORY",
  payload: productsByCategory,
});
export const setCategory = (category) => ({
  type: "SET_Category",
  payload: category,
});

export const setProduct = (product) => ({
  type: "SET_PRODUCT",
  payload: product,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const loadProducts = () => async (dispatch) => {
  const products = await fetchProducts();
  dispatch(setProducts(products));
};
export const loadCategoryProducts = (category) => async (dispatch) => {
  const productsByCategory = await fectProductsByCategory(category);
  dispatch(setProductsByCategory(productsByCategory));
};
export const loadProduct = (id) => async (dispatch) => {
  const product = await fetchProductById(id);
  dispatch(setProduct(product));
};
