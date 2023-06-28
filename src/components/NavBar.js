import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

const Wrapper = styled.div`
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        padding: 22px 50px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 70px;
        .menu-warp{
                ${mixins.flexBox({justify:'space-between'})};
        }
        .menu-area{
        .logo{
                font-size: 22px;
                font-weight: bold;
                color: #aaf922;
                text-shadow: 1px 2px 10px #444;
                // text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
                }
        a{
                margin-right: 15px;
                font-size: 16px;
        }
        }
        .user-area{
        .icon{
                padding: 0 12px;
        }
        }
        &.active-search-modal{
                background: #000000dd;
        }
`

const NavBar = (props) => {
        return (
                <Wrapper 
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
                </Wrapper>
                
                
        )
}

export default NavBar;