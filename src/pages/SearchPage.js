
import api from '../Api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const SearchPage = () => {
  const { param } = useParams();

  const [searchResults, setSearchResults] = useState([])

  const search = async () => {
    const { data } = await api.get('search/multi', {params:{ query: param} });
   
    if(data){
      console.log(data);
      setSearchResults(data.results)
    }
  }
  useEffect(() => {
    search()
  }, [])

  return (
   <div className="search-page">SearchPage</div>
  )
}

export default SearchPage;