import React from 'react'
import DialoguesUsersCss from './DialoguesUsers.module.css'
import { NavLink } from 'react-router-dom'
import UserPhoto from './UserPhoto/UserPhoto'

const DialoguesUsers = (props) => {
    return (
        <NavLink to={"/messages/people/" + props.id} className={DialoguesUsersCss.link}>
            <div className={DialoguesUsersCss.content}>
                <UserPhoto />
                <span className={DialoguesUsersCss.dialog}>{props.title}</span>
            </div>
        </NavLink>
    )
}
export default DialoguesUsers;