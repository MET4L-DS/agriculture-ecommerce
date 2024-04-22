import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedLayout = () => {
    return (
        <div className="grid grid-cols-6">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default SharedLayout;
