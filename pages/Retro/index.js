import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperProducts from "../../components/Shared/SwiperProducts/SwiperProducts";

export default function RetroPage() {
  return (
    <div>
      <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </Swiper>
    </div>
  );
}
