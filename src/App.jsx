import React from "react";
import {
    Home,
    Products,
    SingleProduct,
    Cart,
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
