import React from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './Slider.module.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import slide1 from './../../assets/slider/slider1.JPG';
import slide2 from './../../assets/slider/slider2.JPG';
import slide3 from './../../assets/slider/slider3.JPG';
import slide4 from './../../assets/slider/slider4.JPG';
import slide5 from './../../assets/slider/slider5.JPG';

SwiperCore.use([Navigation, Pagination]);

function Slider () {

    return ( 
        <Swiper tag = "section"
            spaceBetween={0}
            wrapperTag = "ul"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide tag ="li"><img className={styles.sliderImage} src={slide1} alt="slide1" /></SwiperSlide>
            <SwiperSlide tag ="li"><img className={styles.sliderImage} src={slide2} alt="slide2" /></SwiperSlide>
            <SwiperSlide tag ="li"><img className={styles.sliderImage} src={slide3} alt="slide3" /></SwiperSlide>
            <SwiperSlide tag ="li"><img className={styles.sliderImage} src={slide4} alt="slide4" /></SwiperSlide>
            <SwiperSlide tag ="li"><img className={styles.sliderImage} src={slide5} alt="slide5" /></SwiperSlide>
        </Swiper>
    )
}

export default Slider;