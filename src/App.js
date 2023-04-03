import React, { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import Navbar from "./pages/Navbar";
import Register from "./components/Register";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import Success from "./components/Success";
import ProtectedRoute from "./components/ProtectedRoute";
import { app } from "./firebase";

export const AppContext = createContext(null);

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product) => {
    if (cartItems?.length > 0) {
      let exist = cartItems.some((a) => a._id === product._id);

      if (exist) {
        let productFinded = cartItems.findIndex(
          (item) => item._id === product._id
        );
        let copyCart = [...cartItems];
        copyCart.splice(productFinded, 1, {
          ...product,
          quantity: product.quantity + 1,
        });
        setCartItems(copyCart);
        return;
      }
      setCartItems([...cartItems, product]);
      return;
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveItem = (_id) => {
    const nuevoCarrito = [...cartItems];
    const index = nuevoCarrito.findIndex((product) => product._id === _id);
    nuevoCarrito.splice(index, 1);
    setCartItems(nuevoCarrito);
  };

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route
          path="/"
          element={<Home handleAddProduct={handleAddProduct} />}
        />
        <Route
          path="/detail/:id"
          element={<ProductDetail handleAddProduct={handleAddProduct} />}
        />
        <Route path="/login" element={<Login setCartItems={setCartItems} />} />
        <Route
          path="/register"
          element={<Register setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleRemoveItem={handleRemoveItem}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success setCartItems={setCartItems} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
