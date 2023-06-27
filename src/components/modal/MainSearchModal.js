import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainSearchModal = (props) => {
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState('');

  const onSearchKeyword = () => {
    if(searchKeyword === ''){
      return; 
    }else{
      props.isShowSearchModal(false)
      navigate('/search', { replace: true });
      props.handleSearchKeyword(searchKeyword);    
    }
    
  }
  const handleOnKeyPress = (e) => {
     // Enter 입력이 되면 클릭 이벤트 실행
    if (e.key === 'Enter') {
      console.log('enter');
      onSearchKeyword();      
    }
  };

  useEffect(() => {})
  return (
    <Wrapper className="main-search-modal modal">
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
              type="text" 
              placeholder="Search by movies, TV shows, people, and more."
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={handleOnKeyPress}
            />
            <FontAwesomeIcon 
              onClick={onSearchKeyword}
              icon={faMagnifyingGlass} className="search-icon"/>
          </div>
        </div>
      </div>
      <FontAwesomeIcon 
      onClick={() => props.isShowSearchModal(false)}
      icon={faCircleXmark} className="close-icon"/>
    </Wrapper>
  )
}

export default MainSearchModal;