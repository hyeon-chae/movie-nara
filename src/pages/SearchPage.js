
import api from '../Api'
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'
// import { useSearchParams } from "react-router-dom";
import BasicList from '../components/BasicList'

const SearchPage = (props) => {
  // const { param } = useParams();
  // const [searchParams] = useSearchParams('');
  const [loading, setLoading] = useState(true);

  // const param = searchParams;
  // const param = searchParams.get('searchKeyword');

  console.log(props);

  const [searchResultsTotal, setSearchResultsTotal] = useState([])
  const [searchResultsMovie, setSearchResultsMovie] = useState([])
  const [searchResultsTv, setSearchResultsTv] = useState([])
  const [searchResultsPerson, setSearchResultsPerson] = useState([])
  const [totalResults, setTotalResults] = useState([])


  const search = async () => {
    const { data } = await api.get('search/multi', {params:{ query: props.searchParams} });
   
    if(data){
      console.log(data);
      setSearchResultsTotal(data.results)
      setTotalResults(data.total_results)
      setSearchResultsMovie(data.results.filter(el => el.media_type === 'movie'));
      setSearchResultsTv(data.results.filter(el => el.media_type === 'tv'));
      setSearchResultsPerson(data.results.filter(el => el.media_type === 'person'));
      setLoading(false)
    }
  }
  useEffect(() => {
    search()
  }, [])

  return (
   <div className="search-page">
    <div className="search-result">
    A total of {totalResults} results for your <span className="keyword"> " {props.searchParams} " </span> search
    </div>
     {loading ? <strong>Loading...</strong> : (
        <BasicList 
                list={searchResultsTotal} 
                activeTabMenu={false}
                listTitle={`All`}
                label={false}
        ></BasicList>    
      )} 
     {loading ? <strong>Loading...</strong> : (
        <BasicList 
                list={searchResultsMovie} 
                activeTabMenu={false}
                listTitle={`Movie`}
                label={false}
        ></BasicList>    
      )} 
     {loading ? <strong>Loading...</strong> : (
        <BasicList 
                list={searchResultsTv} 
                activeTabMenu={false}
                listTitle={`TV`}
                label={false}
        ></BasicList>    
      )} 
     {loading ? <strong>Loading...</strong> : (
        <BasicList 
                list={searchResultsPerson} 
                activeTabMenu={false}
                listTitle={`Person`}
                label={false}
        ></BasicList>    
      )} 
   </div>
  )
}

export default SearchPage;