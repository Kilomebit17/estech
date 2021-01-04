import React from 'react'
import HeaderCss from './Header.module.css'
import AddThisUser from './AddThisUser'
import HeaderImg from './HeaderImg'
import HeaderTitleContainer from './HeaderTitleContainer'
const Header = () => {
    return (
        <div className={HeaderCss.Header}>
            <div className={HeaderCss.header__inner}>
                <HeaderImg />
                <HeaderTitleContainer /> 
            </div>
            <div className={HeaderCss.nav}>
                <AddThisUser />
            </div>
        </div>
    )
}
export default Header;