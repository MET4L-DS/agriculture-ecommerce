import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { FaLeaf } from "react-icons/fa6";
import { TfiHeart, TfiSearch, TfiShoppingCart, TfiUser } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const { amount: cartItemAmount } = useSelector((state) => state.cart);
    const { amount: wishlistItemAmount } = useSelector(
        (state) => state.wishlist,
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="col-[1/-1] grid grid-cols-subgrid bg-orange-200 px-6 py-4 font-semibold sm:px-0 ">
            <div className=" col-[1/-1] flex justify-between rounded-lg bg-white px-8 py-4 sm:col-[2/-2]">
                <div className="flex items-center text-green-500">
                    <span>AgriCom</span>
                    <FaLeaf />
                </div>
                <div className="hidden flex-wrap items-center gap-8 text-sm lg:flex">
                    {navLinks.map(({ id, title, link }) => (
                        <NavLink
                            key={id}
                            to={link}
                            className={({ isActive }) =>
                                isActive
                                    ? " text-green-500 hover:text-green-500"
                                    : "hover:text-green-500"
                            }
                        >
                            {title}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden flex-wrap items-center gap-4 text-base leading-[0] text-gray-500 lg:flex">
                    <TfiSearch />
                    <Link
                        to="/wishlist"
                        className="relative flex items-center gap-2 hover:text-green-500"
                    >
                        <TfiHeart />
                        <div className="absolute bottom-[60%] left-[60%] flex aspect-square items-center justify-center rounded-full bg-green-500 p-1 pb-[5px] text-[0.6rem] leading-[0] text-white outline outline-2 outline-white">
                            {wishlistItemAmount}
                        </div>
                    </Link>
                    <Link
                        to="/cart"
                        className="relative flex items-center gap-2 hover:text-green-500"
                    >
                        <TfiShoppingCart size={18} />
                        <div className="absolute bottom-[60%] left-[60%] flex aspect-square items-center justify-center rounded-full bg-green-500 p-1 pb-[5px] text-[0.6rem] leading-[0] text-white outline outline-2 outline-white">
                            {cartItemAmount}
                        </div>
                    </Link>
                    <TfiUser />
                </div>
                <div className="relative flex flex-wrap items-center gap-4 text-base leading-[0] text-gray-500 lg:hidden">
                    <RxHamburgerMenu
                        className={` transition-transform duration-300 ${isMenuOpen && " rotate-180"}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <div
                        className={`absolute right-0 top-full z-50 grid ${isMenuOpen && "translate-y-[-200%] opacity-0"} gap-8 rounded bg-slate-100 p-4 transition-all duration-300 `}
                    >
                        {navLinks.map(({ id, title, link }) => (
                            <NavLink
                                key={id}
                                to={link}
                                className={({ isActive }) =>
                                    isActive
                                        ? "px-6 text-green-500 hover:text-green-500"
                                        : "px-6 hover:text-green-500"
                                }
                            >
                                {title}
                            </NavLink>
                        ))}
                        <div className="flex justify-between">
                            <TfiSearch />
                            <Link
                                to="/wishlist"
                                className="relative flex items-center gap-2 hover:text-green-500"
                            >
                                <TfiHeart />
                                <div className="absolute bottom-[60%] left-[60%] flex aspect-square items-center justify-center rounded-full bg-green-500 p-1 pb-[5px] text-[0.6rem] leading-[0] text-white outline outline-2 outline-white">
                                    {wishlistItemAmount}
                                </div>
                            </Link>
                            <Link
                                to="/cart"
                                className="relative flex items-center gap-2 hover:text-green-500"
                            >
                                <TfiShoppingCart size={18} />
                                <div className="absolute bottom-[60%] left-[60%] flex aspect-square items-center justify-center rounded-full bg-green-500 p-1 pb-[5px] text-[0.6rem] leading-[0] text-white outline outline-2 outline-white">
                                    {cartItemAmount}
                                </div>
                            </Link>
                            <TfiUser />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
