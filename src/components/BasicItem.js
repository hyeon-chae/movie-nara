import { Link } from 'react-router-dom'

const BasicItem = ({item, inx, label, currentTab}) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"
  const param = currentTab === 0 ? 'movie' : 'tv';

  return (
    <div key={item.id}>
      <Link to={`detail/${param}/${item.id}`} 
      className={label ? 'basic-item popular' : 'basic-item normal'}
      >
        <div className="img-area">
          {label ? (
            <p className="num">{inx+1}</p>
            ) : 
            (<div className="hover-detail">
            <p className="title">{item.name}</p>
            <p className="overview">{ item.overview }</p>
          </div>)
          }
          <img src={IMAGE_BASE_URL+item.poster_path} alt="iamge" />
        </div>
        <div className="info-area"> 
          <p className="title-area">{item.title || item.name}</p>
        </div>
      </Link>
    </div>
  )
}

export default BasicItem;