import React from 'react'
import MessagesCss from './Messages.module.css'
import { NavLink } from 'react-router-dom';
import img from './img/email.png'
const Messages = () => {
    return (
            <NavLink to="/messages" activeClassName={MessagesCss.active} className={MessagesCss.link}>
                <div className={MessagesCss.title}>
                    <img src={img} alt="img" className={MessagesCss.img}/>
                    <div className={MessagesCss.txt}></div>
                </div>
            </NavLink>
    )
}
export default Messages;