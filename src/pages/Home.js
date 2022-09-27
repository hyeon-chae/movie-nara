import api from '../Api'
import {useState, useEffect} from 'react';

import MainBanner from '../components/MainBanner'


const Home = () => {
        // const [loading, setLoading] = useState(true);
        const [movies, setMovies] = useState([]);
        const [trandingAll, setTrandingAll] =  useState([]);

        const getMovies = async () => {
                // const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=f4a0fec2ffba5a808270c74f9bc8dd59&page=1`)
                // const json = await response.json();
                // setMovies(json.results);
                
                const { data } = await api.get('/movie/popular')
                setMovies(data.results);
        }

        const getTrandingAll = async () => {
                const { data } = await api.get('/trending/all/week')
                setTrandingAll(data.results);
        }

        
        useEffect(() => {
                getMovies();
                getTrandingAll();
                // console.log( trandingAll);
        }, [])

        return (
                <div className="home-area">
                        <MainBanner trandingAll={trandingAll}></MainBanner>

                        {movies.map((movie) => (
                                <div key={movie.id}>
                                        <p>{movie.title}</p>
                                </div>
                        ))}
                                    
                       
                </div>
        )
}

export default Home;