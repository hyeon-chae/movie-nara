import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
        return (
                <div className="nav-area">
                        <Link to='/'>MOVIE NARA</Link>
                        <Link to='/movie'>Movie</Link>
                        <Link to='/program'>TV Program</Link>
                </div>
                
        )
}

export default Nav;