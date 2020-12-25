import React from 'react'
import SideBarCss from './SideBar.module.css'
import { Route } from 'react-router-dom'
import Select from './Select/Select'
import Header from './Header/Header'

const SideBar = () => {
    return (
        <div className={SideBarCss.bg}>
                <Route render={() => <Header />} />
            <div className={SideBarCss.select}>
                <Select />
            </div>
        </div>
    )
}
export default SideBar;