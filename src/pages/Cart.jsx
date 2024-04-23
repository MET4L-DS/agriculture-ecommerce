import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    removeProduct,
    calculateTotal,
    incrementProductAmount,
    decrementProductAmount,
} from "../features/cart/cartSlice";

const Cart = () => {
    const { cartItems, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);

    return (
        <div className="col-[2/-2] grid gap-2">
            <hr />
            {cartItems.map((product) => (
                <div
                    key={product.id}
                    className="flex justify-between bg-slate-200 p-4"
                >
                    <span>{product.name}</span>
                    <span>Quantity: {product.amount}</span>
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            className=" bg-gray-500"
                            onClick={() =>
                                dispatch(
                                    incrementProductAmount({
                                        productID: product.id,
                                    }),
                                )
                            }
                        >
                            Increase
                        </button>
                        <button
                            type="button"
                            className=" bg-gray-500"
                            onClick={() => {
                                if (product.amount === 1) {
                                    dispatch(
                                        removeProduct({
                                            productID: product.id,
                                        }),
                                    );
                                    return;
                                }
                                dispatch(
                                    decrementProductAmount({
                                        productID: product.id,
                                    }),
                                );
                            }}
                        >
                            Decrease
                        </button>
                    </div>
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
                className="mx-auto p-4 text-red-500 outline outline-2 outline-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => dispatch(clearCart())}
            >
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
