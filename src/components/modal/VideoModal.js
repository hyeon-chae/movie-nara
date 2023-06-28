import api from '../../Api'
import {useState, useEffect} from 'react';
import { styled } from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .background{
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  .modal-contents{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 100px);
    .video-area{
      width: 100%;
      height: 50vw;
    }
  } 
`

const VideoModal = (props) => {
  const [loading, setLoading] = useState(true);
  const [videoList, setVideoList] = useState({});

  const getVideoList = async() => {
    const { data } = await api.get(`movie/${props.movieId}/videos`);
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
   <Wrapper className="video-modal modal">
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
    </Wrapper>
  )
}

export default VideoModal;

