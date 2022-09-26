import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const BasicList = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide>swiper-slide</SwiperSlide>
      <SwiperSlide>swiper-slide</SwiperSlide>
      <SwiperSlide>swiper-slide</SwiperSlide>
      <SwiperSlide>swiper-slide</SwiperSlide>
  </Swiper>
  )
} 
export default BasicList;