import React from 'react'
import MessagesCss from './Messages.module.css'
import { NavLink } from 'react-router-dom';
const Messages = () => {
    return (
        <div className={MessagesCss.title}>
            <NavLink to="/messages" activeClassName={MessagesCss.active}>Сообщения</NavLink>
        </div>
    )
}
export default Messages;