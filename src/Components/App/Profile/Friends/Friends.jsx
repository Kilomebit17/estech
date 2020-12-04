import React from 'react'
import FriendsCss from './Friends.module.css'
import {NavLink} from "react-router-dom";
import img from './img/friends.png'
const Friends = () => {
    return (
        <div className={FriendsCss.friends}>
            <div>
                <NavLink to="friends" activeClassName={FriendsCss.active} className={FriendsCss.title}>
                    <img src={img} alt="img" className={FriendsCss.imgCss}/>
                    <div className={FriendsCss.txt}></div>
                </NavLink>
            </div>
        </div>
    )
}
export default Friends