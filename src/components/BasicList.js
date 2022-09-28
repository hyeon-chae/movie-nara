import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y} from 'swiper';

import BasicItem from './BasicItem'

const BasicList = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenuList = [
    {menu:'Movie', value: 'movies'}, 
    {menu:'TV Shows', value: 'tv'}
  ]

  const selectMenuHandler = (val, index) => {
    setCurrentTab(index);
    props.getTabMenu(val)
  };
  
  useEffect(() => { 

  }, [])

  return (
    <div className="basic-list">
      <div className="list-title-area">
        <p className="list-title">What's Popular</p>
        <ul className="tab-menu-area">
          {tabMenuList.map((item, i) =>(
            <li 
              key={i}
              onClick={() => selectMenuHandler(item.value, i)}
              className={ currentTab === i ? 'tab-menu active' : 'tab-menu' }
              >
                {item.menu}
            </li>
          ))}
        </ul>
      </div>
      <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={6.5}
      spaceBetween={10}
      className="BasicListSwiper"
      scrollbar={{
        hide: true,
      }}
      >
      {props.popularList.map((item, inx) => (
        <SwiperSlide key={item.id}>
          <BasicItem item={item} inx={inx}></BasicItem>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default BasicList;