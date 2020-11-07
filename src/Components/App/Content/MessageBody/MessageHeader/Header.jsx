import React from 'react'
import HeaderCss from './Header.module.css'
import HeaderClose from './HeaderClose'
import HeaderImg from './HeaderImg'
import HeaderTitle from './HeaderTitle'
const Header = () => {
    return (
        <div>
            <div className={HeaderCss.header__inner}>
                <HeaderImg />
                <HeaderTitle />
            </div>
            <div className={HeaderCss.nav}>
                <HeaderClose />
            </div>
        </div>
    )
}
export default Header;