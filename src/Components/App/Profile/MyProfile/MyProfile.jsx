import React from 'react'
import MyProfileCss from './MyProfile.module.css'
import { NavLink } from 'react-router-dom'
import img from './img/user.png'
const MyProfile = () => {

    return (
        <NavLink to="/profile" activeClassName={MyProfileCss.active} className={MyProfileCss.link}>
            <img src={img} alt="img" className={MyProfileCss.imgCss}/>
            <div className={MyProfileCss.txt}></div>
        </NavLink>
    )
}
export default MyProfile