import React from "react";
import { Link } from "react-router-dom";
import { FaDeezer } from "react-icons/fa";
import Dropdown from "../components/Dropdown";
import { BsCartFill } from "react-icons/bs";
import { useAuth } from "../firebase";
const Navbar = ({ cartItems, setCartItems }) => {
  const currentUser = useAuth();

  return (
    <header className="h-24 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaDeezer className="text-2xl text-pink-600" />
        <Link to="/">
          <span className="text-2xl font-semibold text-pink-600">
            Deezer shopping
          </span>
        </Link>
      </div>
      <div className="flex gap-1 mr-1">
        {currentUser ? (
          <>
            <div className="relative">
              <Link to="/cart">
                <BsCartFill className="w-[25px] h-[20px] mt-2 mr-2 cursor-pointer" />
                <span className="bg-sky-500 text-white w-5 h-5 rounded-full absolute -top-3 left-3 text-center leading-5 px-1">
                  {cartItems.length}
                </span>
              </Link>
            </div>
            <Dropdown setCartItems={setCartItems} />
          </>
        ) : (
          <>
            <div className="relative">
              <Link to="/cart">
                <BsCartFill className="w-[25px] h-[20px] mt-2 mr-2 cursor-pointer" />
                <span className="bg-sky-500 text-white w-5 h-5 rounded-full absolute -top-3 left-3 text-center leading-5 px-1">
                  {cartItems.length}
                </span>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
