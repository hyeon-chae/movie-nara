import api from '../Api'
import {useState, useEffect} from 'react';

import MainBanner from '../components/MainBanner'
import BasicList from '../components/BasicList'


const Home = () => {
        const [loading, setLoading] = useState(true);
        // main banner
        const [trandingAll, setTrandingAll] =  useState([]);
        const [popularList, setPopularList] = useState([]);
        const [onTheAirList, setonTheAirList] = useState([]);
        const [tabMenu, setTabMenu] = useState('movie');

        const getTrandingAll = async () => {
                const { data } = await api.get('trending/all/week');
                if(data){
                        setTrandingAll(data.results);
                }
        }

        const getPopularList = async (val) => {
                // const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=f4a0fec2ffba5a808270c74f9bc8dd59&page=1`)
                // const json = await response.json();
                // setMovies(json.results);
                
                const { data } = await api.get(val + '/popular');
                if(data){
                        setPopularList(data.results);
                }
                setLoading(false);
        }
        const getOnTheAir = async () => {
                const { data } = await api.get('tv/on_the_air');
                if(data){
                        setonTheAirList(data.results);
                }
        }

        const getTabMenu = (e) => {
                setTabMenu(e);
                getPopularList(e);
        }

        useEffect(() => {
                getTrandingAll();
                getPopularList('movie');
                getOnTheAir();
                // console.log( trandingAll);
        }, [])

        return (
                <div className="home-area">
                        <MainBanner trandingAll={trandingAll}></MainBanner>

                        {loading ? <strong>Loading...</strong> : (
                        <BasicList 
                                list={popularList} 
                                tabMenu={tabMenu} 
                                getTabMenu={getTabMenu}
                                activeTabMenu={true}
                                listTitle={`What's Popular`}
                                label={true}
                        ></BasicList>    
                        )}                              

                        {loading ? <strong>Loading...</strong> : (
                        <BasicList 
                                list={onTheAirList} 
                                tabMenu={tabMenu} 
                                getTabMenu={getTabMenu}
                                activeTabMenu={false}
                                listTitle={'TV on The Air'}
                        ></BasicList>    
                        )}                              
                                                 
                </div>
        )
}

export default Home;