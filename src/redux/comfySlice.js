import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/products-data";
import { getStorageItem } from "../utils/utils";

const initialState = {
  isLoading: false,
  showNavBar: false,
  showCart: false,
  showCheckout: false,
  cartProducts: getStorageItem("cartProducts"),
  featuredProducts: data.filter((product) => product.fields.featured),
  products: data,
};

const comfySlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setShowCheckout: (state) => {
      state.showCheckout = !state.showCheckout;
    },
    setShowNavBar: (state) => {
      state.showNavBar = !state.showNavBar;
    },
    addProductToCart: (state, action) => {
      const currProduct = state.cartProducts.find(
        (cp) => cp.id === action.payload.id
      );

      if (currProduct) {
        currProduct.count++;
      } else {
        state.cartProducts.push({ ...action.payload, count: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.payload.id
      );
    },
    increaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((product) => {
        if (product.id === action.payload.id) {
          product.count++;
        }
      });
    },
    decreaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((product) => {
        if (product.id === action.payload.id) {
          product.count--;
        }
      });
    },
  },
});

export const {
  setCartProducts,
  setIsLoading,
  setShowCart,
  setShowCheckout,
  setShowNavBar,
  addProductToCart,
  removeProductFromCart,
  increaseCartProductCount,
  decreaseCartProductCount,
} = comfySlice.actions;

export default comfySlice;
