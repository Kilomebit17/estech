import React from 'react'
import HeaderCss from './Header.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from "axios";

class Header extends React.Component {
    render() {
        return (
            <div className={HeaderCss.header}>
                <div className={HeaderCss.header__logo}>
                    <NavLink to='/home' >
                        <img src='https://i.pinimg.com/564x/6e/7a/b3/6e7ab3d5842c0f16f330213bb438c60b.jpg' alt="profile picture" className={HeaderCss.link}/>
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default Header;