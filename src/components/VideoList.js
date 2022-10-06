import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y} from 'swiper';

import VideoItem from './VideoItem';

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
   <div className="video-list">
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
   </div>
  )
}

export default MovieList;