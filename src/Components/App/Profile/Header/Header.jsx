import React from 'react'
import HeaderCss from './Header.module.css'
import { NavLink } from 'react-router-dom';
import logo from './headerLogo/headerlogo.png'

const Header = () => {
    return (
        <div className={HeaderCss.header}>
            <div className={HeaderCss.header__logo}>
                <NavLink to='/home' activeClassName={HeaderCss.link}>
                    <img className={HeaderCss.header__img} src={logo} alt="logo" />
                </NavLink>
            </div>
        </div>
    )
}

export default Header;