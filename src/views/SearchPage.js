
import api from '../Api'
import { useState, useEffect } from 'react';
import BasicList from 'components/BasicList'
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

const Wrapper = styled.div`
    padding-top: 70px;
  .search-result{
    padding: 30px 50px 10px;
    ${mixins.body02()}
    .keyword{
      ${mixins.title04()}
    }
    .total-results{
      ${mixins.subTitle()}
    }
  }
`

const SearchPage = ( props ) => {
  const [loading, setLoading] = useState(true);

  const [searchResultsTotal, setSearchResultsTotal] = useState([])
  const [searchResultsMovie, setSearchResultsMovie] = useState([])
  const [searchResultsTv, setSearchResultsTv] = useState([])
  const [searchResultsPerson, setSearchResultsPerson] = useState([])
  const [totalResults, setTotalResults] = useState([])


  const search = async () => {
    const { data } = await api.get('search/multi', {params:{ query: props.searchKeyword} });
    if(data){
      setSearchResultsTotal(data.results)
      setTotalResults(data.total_results)
      setSearchResultsMovie(data.results.filter(el => el.media_type === 'movie'));
      setSearchResultsTv(data.results.filter(el => el.media_type === 'tv'));
      setSearchResultsPerson(data.results.filter(el => el.media_type === 'person'));
      setLoading(false);
    }
  }
  useEffect(() => {
    search()
  }, [])

  return (
   <Wrapper className="search-page">
    <div className="search-result">
    A total of <span className='total-results'>{totalResults}</span> results for your <span className="keyword"> " {props.searchKeyword} " </span> search
    </div>
      {totalResults === 0 ?
        (<div className='serch-body'>일치하는 컨텐츠가 없습니다.</div>) :
        (<div>
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
        </div>)}
    </Wrapper>
  )
}

export default SearchPage;