import React from 'react'
import HeaderCss from './Header.module.css'
import { NavLink } from 'react-router-dom';
import logo from './headerLogo/headerlogo.png'

const Header = () => {
    return (
        <div className={HeaderCss.header}>
            <div className={HeaderCss.header__logo}>
                <NavLink to='/home' className={HeaderCss.link}></NavLink>
            </div>
        </div>
    )
}

export default Header;