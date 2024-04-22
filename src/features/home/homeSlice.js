import { createSlice } from "@reduxjs/toolkit";

import { products } from "../../constants";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        products: products,
        value: 0,
    },
    // reducers: {
    //     increment: (state) => {
    //         state.value += 1;
    //     },
    //     decrement: (state) => {
    //         state.value -= 1;
    //     },
    // },
});

// export const { increment, decrement } = homeSlice.actions;
export default homeSlice.reducer;
