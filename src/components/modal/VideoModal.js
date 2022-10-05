import api from '../../Api'
import {useState, useEffect} from 'react';

const VideoModal = (props) => {
  console.log('1', props.movieId);
  const [loading, setLoading] = useState(true);
  const [videoList, setVideoList] = useState({});

  const getVideoList = async() => {
    const { data } = await api.get(`movie/${props.movieId}/videos`);
    console.log('2', props.movieId);
    if(data){
      const setTrailer = data.results.filter(el => (
        el.name === 'Official Trailer'
      ))
      setVideoList(setTrailer);

      setLoading(false)
      // this.forceUpdate();
    }
  }
  useEffect(() => { 
    getVideoList();
  }, [])

  return (
   <div className="video-modal">
      <div className="background" onClick={() => props.isShowModal(false)}></div>
      {loading ? <strong>Loading...</strong> : (
      <div className="modal-contents">
        {/* {videoList.id} */}
        <iframe 
          className="video-area"
          src={`https://www.youtube.com/embed/${videoList[0].key}`} 
          title={videoList[0].name} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
      </div>
      )}
    </div>
  )
}

export default VideoModal;

