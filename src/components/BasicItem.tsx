import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

interface IPropsBasicItem { 
  item: {
    id: number;
    name: string;
    overview: string;
    title: string;
    poster_path: string;
  },
  idx: number;
  label?: boolean;
  currentTab: number;
  tabMenu?: string;
}

const Wrapper = styled.div`
  .basic-item{
  ${mixins.flexBox({direction:'column', align: 'start', justify: 'start' })}
  &:hover{
    transition: .4s;
    transform: translateY(-15px);
  }

  .img-area{
    position: relative;
    min-height: 180px;
    img{
      border-radius: 8px;
      width: 100%;
    }
  }
  .info-area{
    width: 100%;
    .title-area{
      ${mixins.body02()}
      ${mixins.textEllipsis()}
      margin-top: 6px
    }
  }
  &.popular{
    .num{
      ${mixins.title01()}
      position: absolute;
      top: 0;
      padding: 0 10px;
      text-shadow: 1px 2px 10px #444;
      font-style: italic;
    }
  }
  &.normal{
    &:hover{
      .hover-detail{
        display: block;
      }
    }
  }
  .hover-detail{
    display: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    overflow: hidden;
    .title{
      ${mixins.body01()}
      padding-bottom: 10px
    }
    .overview{
      ${mixins.body04()}
      color: #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 5; /* ellipsis line */
      -webkit-box-orient: vertical;
      line-height: 1.2em;
      height: auto;
    }
  }
}
`

const BasicItem = ({
  item,
  idx,
  label,
  currentTab,
  tabMenu
}: IPropsBasicItem) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"
  const param = (currentTab  === 0 && tabMenu === 'movie') ? 'movie' : 'tv';

  return (
    <Wrapper key={item?.id}>
      <Link to={`/detail/${param}/${item?.id}`} 
      className={label ? 'basic-item popular' : 'basic-item normal'}
      >
        <div className="img-area">
          {label ? (
            <p className="num">{idx+1}</p>
            ) : 
            (<div className="hover-detail">
            <p className="title">{item?.name}</p>
            <p className="overview">{ item?.overview }</p>
          </div>)
          }
          <img src={IMAGE_BASE_URL+item?.poster_path} alt="iamge" />
        </div>
        <div className="info-area"> 
          <p className="title-area">{item?.title || item?.name}</p>
        </div>
      </Link>
    </Wrapper>
  )
}

export default BasicItem;