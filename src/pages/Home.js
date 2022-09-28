import api from '../Api'
import {useState, useEffect} from 'react';

import MainBanner from '../components/MainBanner'
import BasicList from '../components/BasicList'


const Home = () => {
        // const [loading, setLoading] = useState(true);
        // main banner
        const [trandingAll, setTrandingAll] =  useState([]);
        const [popularList, setPopularList] = useState([]);
        const [tabMenu, setTabMenu] = useState('movie');

        const getTrandingAll = async () => {
                const { data } = await api.get('/trending/all/week')
                setTrandingAll(data.results);
        }

        const getPopularList = async () => {
                // const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=f4a0fec2ffba5a808270c74f9bc8dd59&page=1`)
                // const json = await response.json();
                // setMovies(json.results);
                
                const { data } = await api.get('/' + tabMenu + '/popular')
                setPopularList(data.results);
        }
        
        const getTabMenu = (e) => {
                setTabMenu(e);
                console.log(e);
        }

        useEffect(() => {
                getTrandingAll();
                getPopularList();
                // console.log( trandingAll);
        }, [])

        return (
                <div className="home-area">
                        <MainBanner trandingAll={trandingAll}></MainBanner>
                        <BasicList 
                                popularList={popularList} 
                                tabMenu={tabMenu} 
                                getTabMenu={getTabMenu}
                        ></BasicList>                                  
                </div>
        )
}

export default Home;