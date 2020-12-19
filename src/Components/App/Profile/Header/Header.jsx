import React from 'react'
import HeaderCss from './Header.module.css'
import { NavLink } from 'react-router-dom';
import logo from './headerLogo/headerlogo.png'

const Header = () => {
    return (
        <div className={HeaderCss.header}>
            <div className={HeaderCss.header__logo}>
                <NavLink to='/home' >
                    <img src="https://instagram.fiev9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/45521183_267878687174545_5971491072570818560_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_ohc=bUdRwn7IlcEAX_wFgrC&tp=1&oh=c696d509c12312f0fc7b9037c1d5527b&oe=5FFEA4C6" alt="profile picture" className={HeaderCss.link}/>
                </NavLink>
            </div>
        </div>
    )
}
export default Header;