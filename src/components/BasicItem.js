const BasicItem = ({item, inx}) => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

  return (
    <div className="basic-item popular">
      <div className="img-area">
        <p className="num">{inx+1}</p>
        <img src={IMAGE_BASE_URL+item.poster_path} alt="iamge" />
      </div>
      <div className="info-area"> 
        <p className="title-area">{item.title}</p>
      </div>
    </div>
  )
}

export default BasicItem;