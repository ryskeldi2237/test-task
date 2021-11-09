import { useState } from 'react';
import SliderItem from './SliderItem'
import {Swiper, SwiperSlide } from 'swiper/react';

export default function Slider({products}) {
    const params = {
        navigation: {
            nextEl: 'next',
            prevEl: 'prev'
          },
          slidesPerView: 2.5
    }
    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__header">Preview: Key pieces</div>
                <button className="slider__button">See all</button>
                <button className="slider__btn prev"><img src="/img/prev.svg" alt="prev" /></button>
                <button className="slider__btn next"><img src="/img/next.svg" alt="prev" /></button>
            </div> 
            <div className="wrapp">
               <Swiper {...params}>
               {
                    products && 
                    products.map((item, i) => (
                        <SwiperSlide  key={i}> <SliderItem item={item}/></SwiperSlide>
                    ))
                }
               </Swiper>
            </div>
            <div className="line"></div>
        </div>
    )
} 