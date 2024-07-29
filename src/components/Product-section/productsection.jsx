import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./productsection.css";
import ProductCard from "../Card/ProductCard";

export default function ProductsSection(props) {
   

  return (
    <div className="mb-5">
      <h3 className="m-0">{props.title}</h3>

      <Swiper
      pagination={{
          clickable: true,
        }}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        className="my-3  section"
        breakpoints ={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          320:{
            slidesPerView:2,
            spaceBetween:20
          }
        }}
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