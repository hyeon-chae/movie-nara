import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
        return (
                <div className="nav-area">
                        <div className="center menu-warp">
                                <div className="menu-area">
                                        <Link to='/' className="logo">MOVIE NARA</Link>
                                        <Link to='/movies'>Movies</Link>
                                        <Link to='/shows'>TV Shows</Link>
                                </div>
                                <div className="user-area">
                                        <Link to='/user'>
                                        <FontAwesomeIcon icon={faUser} />
                                        </Link>
                                </div>
                        </div>
                </div>
                
                
        )
}

export default Nav;