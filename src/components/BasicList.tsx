import {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y} from 'swiper';
import PropTypes from 'prop-types'
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

import BasicItem from './BasicItem'

interface IPropsBasicList {
  list?: [];
  activeTabMenu: boolean;
  tabMenu?: string | undefined;
  getTabMenu?: (title: string, val: string) => void ;
  listTitle: string;
  label?: boolean;
}

const Wrapper = styled.div`
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
    // background: rgb(255 255 255 / 20%) !important;
  }
`

const BasicList = ({
  list,
  activeTabMenu,
  tabMenu,
  getTabMenu,
  listTitle, 
  label
}: IPropsBasicList) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenuList = [
    {menu:'Movie', value: 'movie'}, 
    {menu:'TV Shows', value: 'tv'}
  ]

  const selectMenuHandler = (val: string, index: number) => {
    setCurrentTab(index);
    getTabMenu?.(listTitle, val)
  };

  return (
    <Wrapper className="basic-list">
      <div className="list-title-area">
        <p className="list-title">{ listTitle }</p>
        {activeTabMenu ? (
        <ul className="tab-menu-area">
          {tabMenuList?.map((item, i) =>(
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
      {list?.map((item: any, idx: number) => (
        <SwiperSlide key={item.id}>
          <BasicItem 
            item={item} 
            idx={idx} 
            tabMenu={tabMenu}
            currentTab={currentTab}
            label={label}
            />
        </SwiperSlide>
      ))}
      </Swiper>
    </Wrapper>
  )
}
BasicList.prototype = {
  props: PropTypes.object.isRequired,
}
export default BasicList;