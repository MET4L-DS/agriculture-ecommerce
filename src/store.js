import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/home/homeSlice";
import cartSlice from "./features/cart/cartSlice";
import mainSlice from "./features/main/mainSlice";
import wishlistSlice from "./features/wishlist/wishlistSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice,
        home: homeSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
    },
});
