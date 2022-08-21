import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import StoryCard from "./StoryCard";
import {getBooks} from "../../utils/api";
import {GetBooksResp} from "../../utils/types";

const MyStorySwiper: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [books,setBooks] =  useState<GetBooksResp>()

  useEffect(()=>{
      const onLoad = async () => {
          const data = await getBooks<GetBooksResp>()
          setBooks(data);
          console.log(data)
      }

      onLoad()
  },[])

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
      {books ? books.Book.map((number:number) => (
        <SwiperSlide key={number}>
            <StoryCard book={books.Book[number]} current={current === number} current_number = {number}></StoryCard>
        </SwiperSlide>
      )): null}
    </Swiper>
  );
};

export default MyStorySwiper;
