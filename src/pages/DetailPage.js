import api from '../Api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import moment from 'moment';

const DetailPage = () => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const [creditsCast, setCreditsCast] = useState([]);
  const { param, id } = useParams();

  const getDetail = async () => {
    const { data } = await api.get(`${param}/${id}`);
    if(data){
      setDetail(data);
    }
    setLoading(false);
  }
  
  const getcredits = async () => {
    const { data } = await api.get(`${param}/${id}/credits`)
    if(data){
      setCreditsCast(data.cast);
      // console.log(data.cast, creditsCast);
    }
    setLoading(false);
  }

  useEffect(() => {
    getDetail();
    getcredits();
  }, [])

  return (
   <div className="detail-area">
    {loading ? <strong>Loading...</strong> : (
      <div className="main-img-area">
        <div className="background" />
        <img 
          className="detail-main-img"
          src={IMAGE_BASE_URL+detail.backdrop_path} 
          alt="detail-main-img" 
        />
        <div className="mian-info-area">
          <div className="poster-area">
            <img src={IMAGE_BASE_URL+detail.poster_path}  alt="poster" />
          </div>
          <div className="info-area">
            <p className="info-title">
              {detail.original_title || detail.original_name} ({moment(detail.release_date).format('YYYY')})
            </p>
            <ul className="genres">
              {detail.genres.map((item) => (
                <li  key={item.id}>{item.name}</li>
              ))}
            </ul>
            <p className="tagline">{detail.tagline}</p>
            <p className="overview">{detail.overview}</p>
            {detail.created_by ? (
            <p className="createdby">
              {detail.created_by.map((item) => (
                <span key={item.id}>{ item.name }, </span>
              ))}
            </p>
            ) : ''}
          </div>
        </div>
      </div>
    )}

    {loading ? <strong>Loading...</strong> : (
      <div className="credits-area">
        <div className="cast-title">Cast</div>
        <ul className="cast-area">
          {creditsCast.slice(0, 10).map((item) => (
            <li 
            className="cast-item"
            key={item.id}>
              <img src={IMAGE_BASE_URL+item.profile_path}  alt="profile" />
              <p className="name">{item.name}</p>
            </li>
          ))}
      </ul>           
      </div>
    )}
   </div>
  ) 
}

export default DetailPage;