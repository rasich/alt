import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Icon from '../icon';

import './slider.sass';


const slides = [
  'Сент Винсент и Гренадины',
  'Португалия',
  'Саудовская Аравия',
  'Мексика',
  'Испания',
  'Франция',
]

const Slider = (props) => {
  const swiperRef = useRef(null)
  const [activeSlider, setActiveSlider] = useState(0)

  return (
    <div className='slider'>
    <h1 className='slider-title'>{slides[activeSlider]}</h1>

    <div className="slider-wrapper">
      <button  className="slider-swiper__arrow" id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()} >
        <Icon icon={'arrow_left'}/>
      </button>

      <Swiper
        className="slider-swiper"
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => {
          let index = swiper.activeIndex - 5
          index = (index === slides.length) 
            ? 0 
            : (index === -1) 
              ? slides.length - 1 
              : index

          setActiveSlider(index)
          props.setCurrentBg(index)
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button className="slider-swiper__arrow" id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()}>
        <Icon icon={'arrow_right'}/>
      </button>
    </div>

    <h2 className='slider-descr'>Мир Breezzor огромный, исследуй его!</h2>
  </div>
  )
}

export default Slider;
