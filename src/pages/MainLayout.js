import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home'
import Movies from './Movies'
import Programs from './Programs'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/shows' element={<Programs />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default MainLayout;