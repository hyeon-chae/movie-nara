import api from '../Api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import moment from 'moment';
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

const Wrapper = styled.div`
  .main-img-area{
    position: relative;
    .background{
      background: #1f200ad6;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .detail-main-img{
      width: 100%;
      display: block;
    }
    .mian-info-area{
    ${mixins.flexBox({justify:'flex-start'})}
      padding: 70px 50px 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      box-sizing: border-box;
      .poster-area{
        width: 30%;
        img{
          width: 100%;
        }
      }
      .info-area{
        width: calc(100% - 30% - 20px);
        margin-left: 20px;
        .info-title{
          ${mixins.title02()}
        }
        .genres{
          ${mixins.flexBox({justify:'flex-start'})}
          font-size: 12px;
          margin-bottom: 30px;
          li{
            margin: 6px 10px 0 0;
            background: #ffffffcc;
            color: #333;
            padding:2px 6px;
            border-radius: 4px
          }
        }
        .tagline{
          ${mixins.subTitle()}
          font-style: italic;
          color: #bbb;
          margin:30px 0 10px;
        }
        .overview{
          ${mixins.body04()}
        }
        .createdby{
          ${mixins.body03()}
          margin-top:30px;
          font-style: italic;
        }
      }
    }
  }
  .credits-area{
    padding: 50px 0 30px 50px;
    .cast-title{
      ${mixins.title04()}
      padding-bottom: 20px;
    }
    .cast-area{
      ${mixins.flexBox({align:'flex-star', justify:'flex-start'})}
      overflow-x: scroll;
      padding-bottom: 30px;
      .cast-item{
        min-width: 138px;
        width: 180px;
        margin-right: 20px;
        img{
          width: 100%;
          display: block;
          border-radius: 8px;
        }
        .name{
          margin-top: 6px;
        }
      }
    }
  }
`

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
   <Wrapper className="detail-area">
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
              {detail.genres?.map((item) => (
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
          {creditsCast?.slice(0, 10).map((item) => (
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
   </Wrapper>
  ) 
}

export default DetailPage;