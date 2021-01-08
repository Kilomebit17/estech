import React from 'react'
import SideBarCss from './SideBar.module.css'
import Select from './Select/Select'
import HeaderContainer from './Header/HeaderContainer'

const SideBar = () => {
    return (
        <div>
            <HeaderContainer />
            <div className={SideBarCss.select}>
                <Select />
            </div>
        </div>
    )
}
export default SideBar;