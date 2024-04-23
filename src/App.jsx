import React from "react";
import {
    Home,
    Products,
    SingleProduct,
    Cart,
    Wishlist,
    SharedLayout,
    SharedProductsLayout,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<SharedProductsLayout />}>
                        <Route index element={<Products />} />
                        <Route path=":id" element={<SingleProduct />} />
                    </Route>
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
