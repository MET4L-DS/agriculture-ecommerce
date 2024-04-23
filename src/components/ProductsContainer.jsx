import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsContainer = () => {
    const { products } = useSelector((state) => state.main);
    return (
        <div className="col-span-full grid grid-cols-subgrid gap-4">
            {products.map((product) => (
                <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="grid justify-center gap-2 bg-slate-200 p-4"
                >
                    <img
                        src={product.image}
                        alt=""
                        className="aspect-square w-full bg-slate-200 object-cover"
                    />
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                </Link>
            ))}
        </div>
    );
};

export default ProductsContainer;
