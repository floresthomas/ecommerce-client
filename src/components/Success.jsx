import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = ({ setCartItems }) => {
  const navigate = useNavigate();
  const dataCart = JSON.parse(localStorage.getItem("cart"));
  console.log(dataCart);

  const onSubmit = async () => {
    try {
      setCartItems([]);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const clearItem = () => {
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    if (dataCart) {
      setTimeout(() => {
        clearItem();
        onSubmit();
      }, 6000);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      clearItem();
    }, 6000);
  }, [onSubmit]);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="bg-gray-500 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl mb-4">Muchas gracias por tu compra!</h2>
        <ul className="grid grid-cols-2 gap-4">
          {dataCart?.map((item) => (
            <li key={item.id}>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <img className="h-[180px] w-[200px]" src={item.images} />
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                <p className="text-sm font-medium text-black">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Success;
