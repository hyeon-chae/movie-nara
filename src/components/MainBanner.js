import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const MainBanner = ({trandingAll}) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation={true}
    className="mainSwiper"
    >
      {/* <SwiperSlide></SwiperSlide> */}
      
      {trandingAll.slice(0, 5).map((item) => (
        <SwiperSlide key={item.id}>
          <img src={IMAGE_BASE_URL+item.backdrop_path} alt="backdrop_path" />
            <div className="info">
              <p className="title">{item.original_title || item.original_name}</p>
              <p className='overview'>{item.overview}</p>
            </div>
        </SwiperSlide>
      ))}
     
  </Swiper>
  )
} 
export default MainBanner;