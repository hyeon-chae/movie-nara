import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y} from 'swiper';
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

import VideoItem from './VideoItem';

const Wrapper = styled.div`
  background: #343434;
  margin: 30px 0;
  padding: 20px 0 30px;
  box-sizing: border-box;
  .list-title-area{
    padding: 30px 0 10px 50px;
   ${mixins.flexBox({justify: 'start' })};
    .list-title{
      ${mixins.title04()}
      margin-right: 50px;
    }
    .tab-menu-area{
     ${mixins.flexBox({justify: 'space-between' })};
      border: 1px solid #fff;
      border-radius:20px;
      box-sizing:border-box;
      .tab-menu{
        padding: 6px 15px;
        border-radius:20px;
        transition: .2s;
        &.active{
          background: #fff;
          color: #000;
          box-sizing:border-box;
          border: 1px solid #fff;
        }
      }
    }
  }
  .swiper{
    padding-left: 50px !important;
    padding-right: 50px !important;
  }
  .swiper-wrapper{
    padding: 20px 0 30px !important;
  }
  .swiper-scrollbar{
    background: #ffffff33 !important;
  }
`

const MovieList = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenuList = [
    {menu:'Movie', value: 'movie'}, 
    {menu:'TV Shows', value: 'tv'}
  ]
  
  const selectMenuHandler = (str, val, index) => {
    setCurrentTab(index);
    props.getTabMenu(str, val)
  };

  useEffect(() => { 
  }, [])

  return (
   <Wrapper className="video-list">
     <div className="list-title-area">
    <p className="list-title">{ props.listTitle }</p>
    {props.activeTabMenu ? (
        <ul className="tab-menu-area">
          {tabMenuList.map((item, i) =>(
            <li 
              key={i}
              onClick={() => selectMenuHandler('video', item.value, i)}
              className={ currentTab === i ? 'tab-menu active' : 'tab-menu' }
              >
                {item.menu}
            </li>
          ))}
        </ul>) : ''
         }
      </div>
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={3.2}
      spaceBetween={10}
      className="videoListSwiper"
      scrollbar={{
        hide: true,
      }}
      >
      {props.list.slice(0, 10).map((item, inx) => (
        <SwiperSlide 
          onClick={() => props.isShowModal(true, item.id)}
          key={item.id}
        >
          <VideoItem 
            item={item} 
            inx={inx} 
            tabMenu={props.tabMenu}
            currentTab={currentTab}
            label={props.label}
           
            />
        </SwiperSlide>
      ))}
      </Swiper>
   </Wrapper>
  )
}

export default MovieList;