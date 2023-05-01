import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import sliderImg from "../../assets/images/Sreemongol.png";
import sliderImg2 from "../../assets/images/sundorbon.png";
import sliderImg3 from "../../assets/images/Sajek.png";
import sliderImg4 from "../../assets/images/waterfall.jpg";
import sliderImg5 from "../../assets/images/boat.jpg";
import sliderImg6 from "../../assets/images/tent.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between gap-5 w-full container mx-auto px-10 py-28">
      <div className="w-2/6">
        <h2 className="text-white text-6xl font-bold tracking-tight">
          COX'S BAZAR
        </h2>
        <p className="text-white py-7">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className="bg-amber-500 px-6 py-2 rounded-md">
          Booking{" "}
          <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
        </button>
      </div>
      <div className="w-4/6 pb-6">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={35}
          slidesPerView={2.7}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >5
          <SwiperSlide className="hover:border-[3px] rounded-2xl border-amber-500 cursor-pointer">
            <img className="rounded-2xl" src={sliderImg6} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hover:border-[3px] rounded-2xl border-amber-500 cursor-pointer">
            <img className="rounded-2xl" src={sliderImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hover:border-[3px] rounded-2xl border-amber-500 cursor-pointer">
            <img className="rounded-2xl" src={sliderImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hover:border-[3px] rounded-2xl border-amber-500 cursor-pointer">
            <img className="rounded-2xl" src={sliderImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hover:border-[3px] rounded-2xl border-amber-500 cursor-pointer">
            <img className="rounded-2xl" src={sliderImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hover:border-[3px] rounded-2xl border-amber-500 cursor-pointer">
            <img src={sliderImg} alt="" />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
