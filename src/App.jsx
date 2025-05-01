import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
