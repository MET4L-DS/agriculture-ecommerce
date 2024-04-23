import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
    amount: 0,
    total: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlistItems.push(action.payload);
            state.amount += 1;
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                (item) => item.id !== action.payload,
            );
            state.amount -= 1;
        },
        clearWishlist: (state) => {
            state.wishlistItems = [];
            state.amount = 0;
            state.total = 0;
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
    wishlistSlice.actions;
export default wishlistSlice.reducer;
