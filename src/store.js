import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/home/homeSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        cart: cartSlice,
    },
});
