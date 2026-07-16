import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";

export interface CartState {
  cartItems: CartItem[];
  showCart: boolean;
}

const initialState: CartState = {
  cartItems: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem: CartItem = {
        ...action.payload,
      };
      state.cartItems.push(newItem);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    openCart: (state) => {
      state.showCart = true;
    },
    closeCart: (state) => {
      state.showCart = false;
    },
  },
});

export const { addToCart, clearCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
