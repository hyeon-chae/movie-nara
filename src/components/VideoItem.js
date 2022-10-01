import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const VideoItem = (props) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

  useEffect(() => { 

  }, [])
  
  return (
   <div 
    className="video-item"
   >
    <div className="video-area">
      <div className="backgound"></div>
      <img src={IMAGE_BASE_URL+props.item.backdrop_path} alt="backdrop_path" />
      <FontAwesomeIcon icon={faPlay} />
    </div>
    <div className="info-area">
      <p className="title">{props.item.original_title}</p>
    </div>

    

   </div>
  )
}

export default VideoItem;