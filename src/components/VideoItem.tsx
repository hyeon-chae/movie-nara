
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

interface IPropsVideoItem {
  item: {
    backdrop_path: string;
    original_title: string;
  },
}

const Wrapper = styled.div`
    transition: 0.4s;
  .video-area{
    position:relative;
    .backgound{
      background: #00000054;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 8px;
    }
    img{
      width: 100%;
      border-radius: 8px;
      display: block;
    }
    .fa-play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
    }
  }
  .info-area{
    margin-top:10px;
    ${mixins.body02()}
    .title{
      text-align: center;
    }
  }
  &:hover{
    transform: translateY(-15px);
  }
`

const VideoItem = ({item}: IPropsVideoItem) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

  
  return (
   <Wrapper 
    className="video-item"
   >
    <div className="video-area">
      <div className="backgound"></div>
      <img src={IMAGE_BASE_URL+item.backdrop_path} alt="backdrop_path" />
      <FontAwesomeIcon icon={faPlay} />
    </div>
    <div className="info-area">
      <p className="title">{item.original_title}</p>
    </div>

    

   </Wrapper>
  )
}

export default VideoItem;