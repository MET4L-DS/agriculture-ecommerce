import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    calculateTotal,
    calculateAmount,
} from "../features/cart/cartSlice";

const Cart = () => {
    const { products, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
        dispatch(calculateAmount());
    }, [products]);

    return (
        <div className="col-[2/-2] grid gap-2">
            <hr />
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex justify-between bg-slate-200 p-4"
                >
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                </div>
            ))}
            <hr />
            <div className="flex justify-between bg-blue-200 p-4">
                <span>Total</span>
                <span>${total}</span>
            </div>
            <button
                type="button"
                className="mx-auto p-4 text-red-500 outline outline-2 outline-red-500"
                onClick={() => dispatch(clearCart())}
            >
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
