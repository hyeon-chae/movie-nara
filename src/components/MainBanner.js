import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Link } from 'react-router-dom'

const MainBanner = ({trandingAll}) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

  return (
    <Swiper
    modules={[Navigation, Pagination, A11y, Autoplay]}
    loop={true}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    className="mainSwiper"
    >
      {/* <SwiperSlide></SwiperSlide> */}
      
      {trandingAll.slice(0, 6).map((item) => (
        <SwiperSlide key={item.id}>
          <Link to={`/detail/${item.media_type}/${item.id}`}>
            <img src={IMAGE_BASE_URL+item.backdrop_path} alt="backdrop_path" />
            <div className="info">
              <p className="title">{item.original_title || item.original_name}</p>
              <p className='overview'>{item.overview}</p>
            </div>
            <div className="bottom-style"></div>
          </Link>
        </SwiperSlide>
      ))}
     
  </Swiper>
  )
} 
export default MainBanner;