import React from 'react'
import DialoguesUsersCss from './DialoguesUsers.module.css'
import { NavLink } from 'react-router-dom'
import UserPhoto from './UserPhoto/UserPhoto'

const DialoguesUsers = (props) => {
    return (
        <NavLink to={"/messages/people/" + props.id} className={DialoguesUsersCss.content} activeClassName={DialoguesUsersCss.active}>
            <div className={DialoguesUsersCss.flex}>
                <UserPhoto />
                <span className={DialoguesUsersCss.dialog}>{props.title}</span>
            </div>
        </NavLink>
    )
}
export default DialoguesUsers;