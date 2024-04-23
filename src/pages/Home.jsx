import React from "react";
import { ProductsContainer } from "../components";
import { useSelector } from "react-redux";
import { SectionHeader } from "../components";
import { FaLeaf } from "react-icons/fa6";

const Home = () => {
    const { products } = useSelector((state) => state.main);

    return (
        <div className=" col-[1/-1] grid grid-cols-subgrid gap-4 px-6 py-20 font-semibold sm:col-[2/-2] sm:px-0">
            <SectionHeader
                icon={FaLeaf}
                tagColor="green-500"
                tagText="Our Products"
                title="Featured Products"
            />
            <ProductsContainer products={products} />
        </div>
    );
};

export default Home;
