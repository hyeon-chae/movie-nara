import api from '../Api'
import {useState, useEffect, FC} from 'react';

import MainBanner from 'components/MainBanner'
import BasicList from 'components/BasicList'
import VideoList from 'components/VideoList'
import VideoModal from 'components/modal/VideoModal';

const Home: FC = () => {
        const [loading, setLoading] = useState(true);
        // main banner
        const [trandingAll, setTrandingAll] =  useState<[] | undefined>([]);
        const [popularList, setPopularList] = useState<[] | undefined>([]);
        const [onTheAirList, setOnTheAirList] = useState<[] | undefined>([]);
        const [upcomingList, setUpcomingList] = useState<[] | undefined>([]);
        const [topRatedList, setTopRatedList] = useState<[] | undefined>([]);
        const [movieId, setMovieId] = useState<number | undefined>();

        const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

        const [tabMenu, setTabMenu] = useState('movie');

        const isShowModal = (boolean: boolean, id:number | undefined) => {
                setShowVideoModal(boolean);
                setMovieId(id);
                // console.log(boolean, id);
        }
            
        const getTrandingAll = async () => {
                const { data } = await api.get('trending/all/week');
                if(data){
                        setTrandingAll(data.results);
                }
        }

        const getPopularList = async (val:string) => {
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

        const getUpcomingList = async (val: string) => {
                const { data } = await api.get(val + '/upcoming');
                if(data){
                        setUpcomingList(data.results);
                }
                setLoading(false);
        }

        const getTopRatedList = async (val: string) => {
                const { data } = await api.get(val + '/top_rated');
                if(data){
                        setTopRatedList(data.results);
                }
                setLoading(false);
        }

        const getTabMenu = (title: string, val: string) => {
                setTabMenu(val);
                if(title === `What's Popular`){
                        getPopularList(val);
                }else if(title === 'Top Rated'){
                        getTopRatedList(val);
                }
        }

        useEffect(() => {
                getTrandingAll();
                getPopularList('movie');
                getOnTheAir();
                getUpcomingList('movie');
                getTopRatedList('movie');
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
                                getTabMenu={getTabMenu}
                                listTitle={'Upcoming | official trailer'}
                                isShowModal={isShowModal}
                        ></VideoList>                       
                        )}       

                        {loading ? <strong>Loading...</strong> : (
                        <BasicList 
                                list={topRatedList} 
                                activeTabMenu={true}
                                tabMenu={tabMenu} 
                                getTabMenu={getTabMenu}
                                listTitle={`Top Rated`}
                                label={true}
                        ></BasicList>    
                        )}         

                        {showVideoModal ? ( 
                        <VideoModal 
                                isShowModal={isShowModal}
                                movieId={movieId}
                        ></VideoModal>) : ''}        
                        
                </div>
        )
}

export default Home;