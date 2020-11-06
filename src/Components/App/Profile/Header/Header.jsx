import React from 'react'
import HeaderCss from './Header.module.css'

const Header = () => {
    return (
        <div className={HeaderCss.header}>
            <div className={HeaderCss.header__logo}>
                <a href="">
                    <img className={HeaderCss.header__img} src="https://scontent.fiev9-1.fna.fbcdn.net/v/t1.0-9/96589892_852958135226289_9180315968964919296_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=rhEwhxnI6e8AX_v7o7G&_nc_ht=scontent.fiev9-1.fna&oh=fd164355b38746a8a73b3052d6f245f2&oe=5FC7FEFE" alt="logo" />
                </a>
                <a href="" className={HeaderCss.header__title}>Мой профиль</a>
            </div>
        </div>
    )
}
export default Header;