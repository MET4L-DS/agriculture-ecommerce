import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./";

const ProductsContainer = ({ products }) => {
    return (
        <div className="col-span-full grid grid-cols-subgrid gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductsContainer;
