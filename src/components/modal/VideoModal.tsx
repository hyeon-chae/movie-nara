import api from '../../Api'
import {useState, useEffect} from 'react';
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';


interface IPropsVideoModal {
  isShowModal: (boolean: boolean, id:number | undefined) => void;
  movieId: number | undefined;
}

interface VideoListType {
  id: number;
  name: string;
  key: number;
}

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
   ${mixins.positionCenter('absolute')};
    width: calc(100% - 100px);
    .video-area{
      width: 100%;
      height: 50vw;
    }
  } 
`

const VideoModal = ({isShowModal, movieId}: IPropsVideoModal) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [videoList, setVideoList] = useState<VideoListType[]>([]);

  const getVideoList = async(): Promise<void> => {
    const { data } = await api.get(`movie/${movieId}/videos`);
    if(data){
      const setTrailer = data?.results?.filter((el: { name: string }) => (
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
      <div className="background" onClick={() => isShowModal(false, undefined)}></div>
      {loading ? <strong>Loading...</strong> : (
      <div className="modal-contents">
        {/* {videoList.id} */}
        <iframe 
          className="video-area"
          src={`https://www.youtube.com/embed/${videoList[0]?.key}`} 
          title={videoList[0]?.name} 
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

