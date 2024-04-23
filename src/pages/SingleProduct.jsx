import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StarRating } from "../components";
import {
    addProduct,
    incrementProductAmount,
    calculateTotal,
} from "../features/cart/cartSlice";

const SingleProduct = () => {
    const { id } = useParams();
    const { products } = useSelector((state) => state.main);
    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);

    const product = products.find(
        (product) => Number(product.id) === Number(id),
    );
    const {
        id: productID,
        name,
        company,
        description,
        image,
        price,
        rating,
    } = product;
    return (
        <div className="col-[2/-2] grid grid-cols-subgrid">
            <div className="col-span-2 bg-slate-100 p-2">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="col-span-2 grid gap-4 bg-slate-200 p-16">
                <p>{company}</p>
                <h2 className=" text-4xl">{name}</h2>
                {rating && <StarRating rating={rating} />}
                <p className=" text-xs">{description}</p>
                <p className=" text-3xl">${price}</p>
                <div className="flex gap-4">
                    <button
                        type="button"
                        className="p-4 outline outline-2 outline-blue-400 hover:bg-blue-400 hover:text-white"
                        onClick={() => {
                            // console.log(product);
                            if (
                                cartItems.find((item) => item.id === productID)
                            ) {
                                // console.log(cartItems);
                                dispatch(incrementProductAmount({ productID }));
                                return;
                            }
                            dispatch(addProduct(product));
                            // console.log(cartItems);
                        }}
                    >
                        Add to cart
                    </button>
                    <button
                        type="button"
                        className="p-4 outline outline-2 outline-blue-400 hover:bg-blue-400 hover:text-white"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
