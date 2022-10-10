import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y} from 'swiper';
import PropTypes from 'prop-types'

import BasicItem from './BasicItem'

const BasicList = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenuList = [
    {menu:'Movie', value: 'movie'}, 
    {menu:'TV Shows', value: 'tv'}
  ]

  const selectMenuHandler = (val, index) => {
    setCurrentTab(index);
    props.getTabMenu(props.listTitle, val)
  };
  
  useEffect(() => { 

  }, [])

  return (
    <div className="basic-list">
      <div className="list-title-area">
        <p className="list-title">{ props.listTitle }</p>
        {props.activeTabMenu ? (
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
        </ul>) : ''
         }
      </div>
      <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={6.2}
      spaceBetween={10}
      className="BasicListSwiper"
      scrollbar={{
        hide: true,
      }}
      >
      {props.list.map((item, inx) => (
        <SwiperSlide key={item.id}>
          <BasicItem 
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
BasicList.prototype = {
  props: PropTypes.object.isRequired,
}
export default BasicList;