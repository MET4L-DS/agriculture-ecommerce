import React from "react";
import { ProductsContainer } from "../components";

const Home = () => {
    return (
        <div className="col-[2/-2] grid grid-cols-subgrid">
            <ProductsContainer />
        </div>
    );
};

export default Home;
