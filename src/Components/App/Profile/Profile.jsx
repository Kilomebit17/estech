import React from 'react'
import ProfileCss from './Profile.module.css'
import Couples from './Couples/Сouples'
import Messages from './Messages/Messages'
import Dialogues from './Dialogues/Dialogues'
import { Route } from 'react-router-dom'
// import MessageBg from './MessageBg/MessageBg'

const Profile = () => {
    return (
        <div className={ProfileCss.bg}>
            <div className={ProfileCss.profile}>
                <Couples />
                <Messages />
            </div>
                {/* <Route path='/messages' component={MessageBg} /> */}
                <Route path='/messages' component={Dialogues} />
        </div>
    )
}
export default Profile;