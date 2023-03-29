import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Products = ({ handleAddProduct }) => {
  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/product");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const product = products.map((product) => (
    <ProductCard product={product} handleAddProduct={handleAddProduct} />
  ));

  console.log(products);
  return (
    <div className="w-auto mt-10 justify-items-center	">
      <h2 className="ml-20 font-bold">Productos destacados</h2>
      <Slider {...settings}>{product}</Slider>
    </div>
  );
};

export default Products;
