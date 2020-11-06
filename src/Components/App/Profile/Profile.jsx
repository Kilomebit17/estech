import React from 'react'
import ProfileCss from './Profile.module.css'
import Couples from './Couples/Сouples'
import Messages from './Messages/Messages'

const Profile = () => {
    return (
        <div className={ProfileCss.profile}>
            <Couples title="Пары"/>
            <Messages title="Сообщения"/>
        </div>
    )
}

export default Profile;