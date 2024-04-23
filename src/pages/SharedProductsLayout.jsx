import React from "react";
import { Outlet } from "react-router-dom";

const SharedProductsLayout = () => {
    return (
        <div className="col-span-full grid grid-cols-subgrid">
            <Outlet />
        </div>
    );
};

export default SharedProductsLayout;
