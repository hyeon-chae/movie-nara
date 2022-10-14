import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainSearchModal = (props) => {
  // const getSerchKeyword = (keyword) => {
  //   setSerchKeyword(keyword)
  // }
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();

  const onChangeKeyword = (e) => setSearchKeyword(e.target.value);
  const handleSearch = () => {
    if(searchKeyword === ''){
      return; 
    }else{
      setSearchKeyword('');    
      props.isShowSearchModal(false)
      setSearchParams(searchKeyword)
      navigate(`/search`, { replace: true })
      // navigate({
      //   pathname: '/search',
      //   search: searchParams,
      // })
    }
    
  }
  const handleOnKeyPress = e => {
     // Enter 입력이 되면 클릭 이벤트 실행
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {})
  return (
   <div className="main-search-modal modal">
    <div 
      onClick={() => props.isShowSearchModal(false)}
      className="background">
    </div>
    <div className="contents">
      <div className="search-area">
        <p className="text-area">
        Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="input-area">
          <input 
            onChange={onChangeKeyword}
            value={searchKeyword}
            type="text" 
            placeholder="Search by movies, TV shows, people, and more."
            onKeyPress={handleOnKeyPress}
          />
          <FontAwesomeIcon 
            // onClick={() => navigate('/search', { replace: true })}
            onClick={() => handleSearch()}
            icon={faMagnifyingGlass} className="search-icon"/>
        </div>
      </div>
    </div>
    <FontAwesomeIcon 
     onClick={() => props.isShowSearchModal(false)}
    icon={faCircleXmark} className="close-icon"/>
    </div>
  )
}

export default MainSearchModal;