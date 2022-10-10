import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
        return (
                <div 
                        className={props.showSearchModal ? 'nav-area active-search-modal': 'nav-area'}>
                        <div className="menu-warp">
                                <div className="menu-area">
                                        <Link to='/' className="logo">MOVIE NARA</Link>
                                        <Link to='/movies'>Movies</Link>
                                        <Link to='/shows'>TV Shows</Link>
                                </div>
                                <div className="user-area">
                                        {!props.showSearchModal ? (
                                                <FontAwesomeIcon 
                                                        onClick={() => props.isShowSearchModal(true)}
                                                        icon={faMagnifyingGlass} 
                                                        className="icon"
                                                />
                                        ):(
                                                <FontAwesomeIcon 
                                                        onClick={() => props.isShowSearchModal(false)} 
                                                        icon={faX} 
                                                        className="icon"/>
                                                        
                                        )}
                                        <Link to='/user'>
                                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                        </Link>
                                </div>
                        </div>
                </div>
                
                
        )
}

export default NavBar;