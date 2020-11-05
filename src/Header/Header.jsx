import React from 'react'
import H from './Header.module.css'
const Header = () => {
    return (
        <a href="main" className={H.header__href}>
            <img src="https://www.pngkit.com/png/full/55-558373_tinder-apple-tv-survey-methodology.png" alt="logo" className={H.header__img} />
            <div id="main" className={H.header__title}>Tinder for Animals</div>
        </a>
    )
}
export default Header;