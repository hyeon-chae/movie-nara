import api from '../../Api'
import {useState, useEffect} from 'react';

const VideoModal = (movieId) => {
  const [video, setVideo] = useState('');

  const getVideo = async() => {
    const { data } = await api.get(`movie/${movieId}/videos`)
    if(data){
      setVideo(data.results);
      console.log(video);
    }
  }
  useEffect(() => { 
    getVideo();
  }, [])

  return (
   <div className="video-modal">
      <div className="background"></div>
      <div className="modal-contents">
        VideoModal
      </div>
    </div>
  )
}

export default VideoModal;