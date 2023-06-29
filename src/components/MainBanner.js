import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

const Wrapper = styled.div`
  width: 100%;
  .mainSwiper{
    width: 100%;
    margin-bottom: 30px;
  .swiper-slide{
    img{
      width: 100%;
      display: block;
    }
    .info{
      position: absolute;
      bottom: 18%;
      left: 50px;
      .title{
        ${mixins.title03()}
        text-shadow: 1px 2px 10px #292929;
      }
      .overview{
        ${mixins.body02()}
        ${mixins.textWrapEllips(3)}
        max-width: 600px;
        text-shadow: 1px 1px 3px #292929;
      }
    }
    .bottom-style{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70px;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0),  rgba(0, 0, 0, 0.8));

    }
  }
  .swiper-pagination-bullet{
    background: #fff !important;
  }
}
`

const MainBanner = ({trandingAll}) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

  return (
    <Wrapper>
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
    </Wrapper>
  )
} 
export default MainBanner;