import React, { useContext } from "react";
import Products from "../components/Products";
import CarouselPrincipal from "../components/CarouselPrincipal";
import { AppContext } from "../App";

const Home = ({ handleAddProduct }) => {
  const { user } = useContext(AppContext)
  console.log(user);
  return (
    <div>
      <CarouselPrincipal />
      <Products handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default Home;
