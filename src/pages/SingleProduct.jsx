import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StarRating } from "../components";
import {
    addProduct,
    incrementProductAmount,
    calculateTotal,
} from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { Button } from "../components";

const SingleProduct = () => {
    const { id } = useParams();
    const { products } = useSelector((state) => state.main);
    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);

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
        discount,
        rating,
    } = product;
    return (
        <div className="col-[1/-1] grid grid-cols-subgrid py-20 sm:col-[2/-2]">
            <div className="col-span-full p-2 lg:col-span-2">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full rounded object-cover"
                />
            </div>
            <div className="utopia-px col-span-full grid gap-8 py-16 lg:col-span-2 ">
                <div className="flex flex-col gap-4">
                    <h1 className=" text-4xl">{name}</h1>
                    <p className="text-gray-400">{company}</p>
                    {rating && <StarRating rating={rating} />}
                    <div className="flex items-center gap-2 text-3xl font-bold">
                        <p className="leading-none">${price}</p>
                        {discount && (
                            <p className="font-bold text-gray-300 line-through">
                                ${(price + price * (discount / 100)).toFixed(2)}
                            </p>
                        )}
                    </div>
                </div>
                <p className=" text-sm leading-loose text-gray-400">
                    {description}
                </p>
                <div className="flex gap-4">
                    <Button
                        text="Add to Cart"
                        color="white"
                        bgColor="green-500"
                        onClick={() => {
                            // console.log(product);
                            if (
                                cartItems.find((item) => item.id === productID)
                            ) {
                                dispatch(incrementProductAmount({ productID }));
                                return;
                            }
                            dispatch(addProduct(product));
                        }}
                    />
                    <Button
                        text="Wishlist"
                        color="green-500"
                        bgColor="white"
                        onClick={() => {
                            if (
                                wishlistItems.find(
                                    (item) => item.id === productID,
                                )
                            ) {
                                return;
                            }
                            dispatch(addToWishlist(product));
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
