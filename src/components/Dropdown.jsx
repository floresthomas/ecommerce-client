import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { AppContext } from "../App";

const Dropdown = ({ setCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const auth = getAuth();
  const { user, setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        setCartItems([]);
        navigate("/");
        setUser(null);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <button onClick={toggleModal}>
        <img
          className="h-[35px] rounded-full"
          src={
            user?.photoURL ||
            "https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg"
          }
        />
      </button>
      {isOpen && (
        <div className="fixed">
          <button
            className="bg-sky-500 text-white px-2 rounded-full hover:bg-sky-700 transition"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
