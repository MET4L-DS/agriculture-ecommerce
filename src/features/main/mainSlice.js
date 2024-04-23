import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../constants";
const initialState = {
    products: products,
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    // reducers: {
    //     addToCart: (state, action) => {

    //     }
    // }
});

export default mainSlice.reducer;
