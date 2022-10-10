import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3/', 
  params: {
    api_key: 'f4a0fec2ffba5a808270c74f9bc8dd59',
    language: 'en-US'
  }
});

export default api;