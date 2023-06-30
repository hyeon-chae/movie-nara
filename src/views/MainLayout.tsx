import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useState, useEffect, FC} from 'react';

import NavBar from 'components/NavBar'
import Home from './Home'
import Movies from './Movies'
import TvShow from './TvShow'
import User from './User'
import DetailPage from './DetailPage'
import SearchPage from './SearchPage'
import MainSearchModal from 'components/modal/MainSearchModal';
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

const Wrapper = styled.div`
  position: relative;
  background: #000;
  .center{
    ${mixins.title03()}
    color: #999;
    padding: 200px 0;
    width: 100%;
    box-sizing: border-box;
    padding-top: 200px;
    height: calc(100vh - 100px);
    text-align: center;
  }
`

const MainLayout: FC = () => {
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false)
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const isShowSearchModal = (val: boolean) => {
    setShowSearchModal(val)
  }
  
  const handleSearchKeyword = (val: string) => {
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
    <Wrapper className='main-layout'>
      <Router basename={process.env.PUBLIC_URL}>
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
    </Wrapper>
  )
}

export default MainLayout;