import api from './Api'
import {useState, useEffect} from 'react';


const Home = () => {
        // const [loading, setLoading] = useState(true);
        const [movies, setMovies] = useState([]);

        const getMovies = async () => {
                // const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=f4a0fec2ffba5a808270c74f9bc8dd59&page=1`)
                // const json = await response.json();
                // setMovies(json.results);
                
                const { data } = await api.get('/movie/popular')
                setMovies(data.results);
        }
        
        useEffect(() => {
                getMovies();
                // console.log( movies);
        }, [])

        return (
                <div>
                        <h1>Movie Home</h1>
                        {movies.map((movie) => (
                                <div key={movie.id}>
                                        <p>{movie.title}</p>
                                </div>
                        ))}
                       
                </div>
        )
}

export default Home;