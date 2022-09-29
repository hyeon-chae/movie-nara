import api from '../Api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  // const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { param, id } = useParams();

  const getDetail = async () => {
    // const { data } = await api.get(`movie/760161`);
    const { data } = await api.get(`${param}/${id}`);
    if(data){
      setDetail(data.results);
    }
  }
  
  useEffect(() => {
    getDetail();
  }, [])

  return (
   <div className="detail-area">{detail}  
    디테일 페이지.
   </div>
  )
}

export default DetailPage;