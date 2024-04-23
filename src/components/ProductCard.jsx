import React from "react";
import { Link } from "react-router-dom";
import { StarRating } from "./";

const ProductCard = ({ id, name, image, price, rating, discount }) => {
    return (
        <Link
            to={`/products/${id}`}
            className="relative col-span-full flex flex-col justify-between sm:col-span-2 lg:col-span-1"
        >
            {discount && (
                <div className="absolute -right-2 top-4 z-10 rounded bg-green-500 px-2 py-1 text-[0.6rem] leading-none text-white">
                    {discount}% Off
                </div>
            )}
            <div className="aspect-square overflow-clip rounded bg-slate-100 p-4">
                <img
                    className="aspect-square w-full object-scale-down"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="flex flex-col gap-2 py-6 leading-none">
                {rating && (
                    <div className="flex items-center gap-1 text-[#f9ae14]">
                        {rating && <StarRating rating={rating} />}
                        {/* {reviews && (
                            <p className="text-xs leading-none text-gray-400">{`(${reviews.amount})`}</p>
                        )} */}
                    </div>
                )}
                <p className="text-xs text-gray-400">{name}</p>
                <div className="flex items-center gap-2 font-bold">
                    <p className="leading-none">${price}</p>
                    {discount && (
                        <p className="font-bold text-gray-300 line-through">
                            ${(price + price * (discount / 100)).toFixed(2)}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
