import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../constants";

const initialState = {
    products: products,
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.amount += 1;
        },
        clearCart: (state) => {
            state.products = [];
            state.amount = 0;
            state.total = 0;
        },
        calculateTotal: (state) => {
            state.total = state.products.reduce(
                (total, product) => total + product.price,
                0,
            );
        },
        calculateAmount: (state) => {
            state.amount = state.products.length;
        },
    },
});

export const { addProduct, clearCart, calculateTotal, calculateAmount } =
    cartSlice.actions;
export default cartSlice.reducer;
