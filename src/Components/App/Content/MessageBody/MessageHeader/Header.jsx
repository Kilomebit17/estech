import React from 'react'
import HeaderCss from './Header.module.css'
import HeaderClose from './HeaderClose'
import HeaderImg from './HeaderImg'
import HeaderTitle from './HeaderTitle'
const Header = () => {
    return (
        <div className={HeaderCss.Header}>
            <div className={HeaderCss.header__inner}>
                <HeaderImg />
                <HeaderTitle title='Вы и username образовали пару 06.11.2020' />
            </div>
            <div className={HeaderCss.nav}>
                <HeaderClose />
            </div>
        </div>
    )
}
export default Header;