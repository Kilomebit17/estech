import React from 'react'
import MessagesCss from './Messages.module.css'
import { NavLink } from 'react-router-dom';
import img from './img/email.png'
const Messages = () => {
    return (
        <div className={MessagesCss.title}>
            <NavLink to="/messages" activeClassName={MessagesCss.active} className={MessagesCss.link}>
                <img src={img} alt="img" className={MessagesCss.img}/>
                <div className={MessagesCss.txt}></div>
            </NavLink>
        </div>
    )
}
export default Messages;