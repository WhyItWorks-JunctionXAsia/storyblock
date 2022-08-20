import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import StoryCard from "./StoryCard";

const MyStorySwiper: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {}, [current]);

  return (
    <Swiper
      slidesPerView={3}
      effect={"coverflow"}
      autoHeight={true}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination]}
      onActiveIndexChange={(swiper) => {
        setCurrent(swiper.activeIndex);
      }}
      className="mySwiper"
    >
      {[...Array(5).keys()].map((number) => (
        <SwiperSlide key={number}>
          <StoryCard current={current === number} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyStorySwiper;
