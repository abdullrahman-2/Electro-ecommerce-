import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./productsection.css";
import ProductCard from "../Card/ProductCard";

export default function ProductsSection(props) {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 770) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-5">
      <h3 className="m-0">{props.title}</h3>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        loop={true}
        className="my-3 section"
      >
        {props.products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}