import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    return (
        <div className="col-[2/-2] flex justify-evenly text-3xl ">
            {navLinks.map(({ id, title, link }) => (
                <NavLink
                    key={id}
                    to={link}
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : ""
                    }
                >
                    {title}
                </NavLink>
            ))}
            <div className="flex items-center gap-2">
                <FaBagShopping />
                {amount}
            </div>
        </div>
    );
};

export default Navbar;
