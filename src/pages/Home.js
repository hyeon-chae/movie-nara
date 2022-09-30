import api from '../Api'
import {useState, useEffect} from 'react';

import MainBanner from '../components/MainBanner'
import BasicList from '../components/BasicList'
import VideoList from '../components/VideoList'


const Home = () => {
        const [loading, setLoading] = useState(true);
        // main banner
        const [trandingAll, setTrandingAll] =  useState([]);
        const [popularList, setPopularList] = useState([]);
        const [onTheAirList, setOnTheAirList] = useState([]);
        const [upcomingList, setUpcomingList] = useState([]);

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
                        setOnTheAirList(data.results);
                }
                setLoading(false);
        }

        const getUpcomingList = async (val) => {
                const { data } = await api.get(val + '/upcoming');
                if(data){
                        setUpcomingList(data.results);
                }
                setLoading(false);
        }

        const getTabMenu = (str, val) => {
                setTabMenu(val);
                if(str === 'popular'){
                        getPopularList(val);
                }else if(str === 'video'){
                        getUpcomingList(val);
                }
        }

        useEffect(() => {
                getTrandingAll();
                getPopularList('movie');
                getOnTheAir();
                getUpcomingList('movie');
        }, [])

        return (
                <div className="home-area">
                        <MainBanner trandingAll={trandingAll}></MainBanner>

                        {loading ? <strong>Loading...</strong> : (
                        <BasicList 
                                list={popularList} 
                                activeTabMenu={true}
                                tabMenu={tabMenu} 
                                getTabMenu={getTabMenu}
                                listTitle={`What's Popular`}
                                label={true}
                        ></BasicList>    
                        )}                              

                        {loading ? <strong>Loading...</strong> : (
                        <BasicList 
                                list={onTheAirList} 
                                activeTabMenu={false}
                                tabMenu={'tv'} 
                                getTabMenu={getTabMenu}
                                listTitle={'TV on The Air'}
                        ></BasicList>    
                        )}       
                        
                        {loading ? <strong>Loading...</strong> : (
                        <VideoList
                                list={upcomingList}
                                activeTabMenu={false}
                                tabMenu={tabMenu} 
                                getTabMenu={getTabMenu}
                                listTitle={'Upcoming'}
                        ></VideoList>                       
                        )}                        
                </div>
        )
}

export default Home;