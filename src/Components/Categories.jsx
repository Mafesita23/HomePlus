import React from "react";
import Comedores from '../assets/Images/comedores letra.jpg'
import Logo from '../assets/Images/Logo hogar.png'
import Salas from '../assets/Images/Salas letra.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={Logo}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-screen hover:w-full h-96"
                        src={Comedores}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-screen hover:w-full h-96"
                        src={Salas}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}