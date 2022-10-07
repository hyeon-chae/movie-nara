import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

import NavBar from '../components/NavBar'
import Home from './Home'
import Movies from './Movies'
import TvShow from './TvShow'
import User from './User'
import DetailPage from './DetailPage'
import SearchPage from './SearchPage'
import MainSearchModal from '../components/modal/MainSearchModal';

const MainLayout = () => {
  // const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false)

  const [searchKeyword, setSearchKeyword] = useState('');

  const onChangeKeyword = (e) => setSearchKeyword(e.target.value);
  const handleSearch = () => {
    if(searchKeyword === ''){
      return; 
    }
    // console.log(keyword);
    setSearchKeyword('');    
    // navigate('/search', {replace: true});
    
  }
  const handleOnKeyPress = e => {
     // Enter 입력이 되면 클릭 이벤트 실행
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const isShowSearchModal = (boolean) => {
    setShowSearchModal(boolean)
  }

  const noScroll = () => {
    showSearchModal ? 
    document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';
  }

  useEffect(() => {
    noScroll();
  })

  return (
    <div className='main-layout'>
      <Router>
        <NavBar  
          showSearchModal={showSearchModal} 
          isShowSearchModal={isShowSearchModal}
        />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/shows' element={<TvShow />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/detail/:param/:id' element={<DetailPage />}></Route>
          <Route path='/search' element={<SearchPage searchKeyword={searchKeyword}/>}></Route>
        </Routes>
      </Router>

      {showSearchModal ? ( 
      <MainSearchModal
        isShowSearchModal={isShowSearchModal}
        onChangeKeyword={onChangeKeyword}
        handleOnKeyPress={handleOnKeyPress}
        handleSearch={handleSearch}
        searchKeyword={searchKeyword}
      ></MainSearchModal>) : ''}
    </div>
  )
}

export default MainLayout;