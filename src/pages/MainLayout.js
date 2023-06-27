import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('');

  const isShowSearchModal = (boolean) => {
    setShowSearchModal(boolean)
  }
  
  const handleSearchKeyword = (val) => {
    setSearchKeyword(val);
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
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        {showSearchModal ? ( 
          <MainSearchModal
            isShowSearchModal={isShowSearchModal}
            handleSearchKeyword={handleSearchKeyword}
         ></MainSearchModal>) : ''}
      </Router>
     
    </div>
  )
}

export default MainLayout;