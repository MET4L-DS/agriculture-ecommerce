import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    removeProduct,
    calculateTotal,
    incrementProductAmount,
    decrementProductAmount,
} from "../features/cart/cartSlice";
import { Button } from "../components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Cart = () => {
    const { cartItems, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);

    return (
        <div className="col-[1/-1] grid gap-2 px-6 sm:col-[2/-2] sm:px-0">
            <hr />
            {cartItems.map((product) => (
                <div
                    key={product.id}
                    className="flex items-center justify-between rounded p-4"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={product.image}
                            className=" aspect-square w-20 rounded bg-slate-100"
                            alt=""
                        />
                        <p className="text-2xl text-gray-400">{product.name}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            icon={FaChevronUp}
                            padding="0rem"
                            onClick={() =>
                                dispatch(
                                    incrementProductAmount({
                                        productID: product.id,
                                    }),
                                )
                            }
                        />
                        <span className=" font-bold">{product.amount}</span>
                        <Button
                            icon={FaChevronDown}
                            padding="0rem"
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
                        />
                    </div>
                    <div className="flex flex-col-reverse items-center gap-2 text-2xl font-bold">
                        <p className="leading-none">${product.price}</p>
                        {product.discount && (
                            <p className="font-bold text-gray-300 line-through">
                                $
                                {(
                                    product.price +
                                    product.price * (product.discount / 100)
                                ).toFixed(2)}
                            </p>
                        )}
                    </div>
                </div>
            ))}
            <hr />
            <div className="flex justify-between rounded bg-slate-100 p-4 text-2xl font-bold">
                <span>Total</span>
                <span>${total}</span>
            </div>
            <div className="flex justify-center py-4">
                <Button
                    text="Clear Cart"
                    color="red-500"
                    onClick={() => dispatch(clearCart())}
                />
            </div>
        </div>
    );
};

export default Cart;
