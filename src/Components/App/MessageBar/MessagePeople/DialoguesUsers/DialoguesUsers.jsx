import React from 'react'
import DialoguesUsersCss from './DialoguesUsers.module.css'
import { NavLink } from 'react-router-dom'

const DialoguesUsers = (props) => {
    return (
        <NavLink to={"/messages/people/" + props.id} className={DialoguesUsersCss.content} activeClassName={DialoguesUsersCss.active}>
            <div className={DialoguesUsersCss.flex}>
                <img src={props.usersPhoto} alt="pictures" className={DialoguesUsersCss.photo}/>
                <span className={DialoguesUsersCss.dialog}>{props.title}</span>
            </div>
        </NavLink>
    )
}
export default DialoguesUsers;