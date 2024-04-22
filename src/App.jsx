import React from "react";
import { Home, Product, Cart, SharedLayout } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
