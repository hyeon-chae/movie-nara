import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainSearchModal = (props) => {
  // const getSerchKeyword = (keyword) => {
  //   setSerchKeyword(keyword)
  // }

  useEffect(() => {})
  return (
   <div className="main-search-modal modal">
    <div 
      onClick={() => props.isShowSearchModal(false)}
      className="background">
    </div>
    <div className="contents">
      <div className="search-area">
        <p className="text-area">
        Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="input-area">
          <input 
            onChange={props.onChangeKeyword}
            value={props.searchKeyword}
            type="text" 
            placeholder="Search by movies, TV shows, people, and more."
            onKeyPress={props.handleOnKeyPress}
          />
          <FontAwesomeIcon 
            onClick={() => props.handleSearch(props.searchKeyword)}
            icon={faMagnifyingGlass} className="search-icon"/>
        </div>
      </div>
    </div>
    <FontAwesomeIcon 
     onClick={() => props.isShowSearchModal(false)}
    icon={faCircleXmark} className="close-icon"/>
    </div>
  )
}

export default MainSearchModal;