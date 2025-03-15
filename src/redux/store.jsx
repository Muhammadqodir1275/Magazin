import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import savatReducer from "./savatSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    savat: savatReducer,
  },
});

export default store;
