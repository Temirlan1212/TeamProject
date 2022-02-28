import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},

  cart: JSON.parse(localStorage.getItem("cart")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! ===================== crud start======================
  const getProducts = async () => {
    // let { data } = await axios(JSON_API_PRODUCTS);
    let { data } = await axios(`${JSON_API_PRODUCTS}${window.location.search}`);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    let { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    getProducts();
  };
  // ! ===================== crud end========================

  console.log(state.products);

  const values = {
    getProducts,
    addProduct,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    products: state.products,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
