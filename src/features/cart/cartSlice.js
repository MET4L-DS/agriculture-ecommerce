import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cartItems.push(action.payload);
            state.amount += 1;
        },
        removeProduct: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.productID,
            );
            state.amount -= 1;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        },
        incrementProductAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload.productID,
            );
            cartItem.amount += 1;
        },
        decrementProductAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload.productID,
            );
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

export const {
    addProduct,
    removeProduct,
    clearCart,
    incrementProductAmount,
    decrementProductAmount,
    calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
