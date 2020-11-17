import React from 'react'
import ProfileCss from './Profile.module.css'
import Dialogues from './Dialogues/Dialogues'
import { Route } from 'react-router-dom'
import Select from './Select/Select'
import Header from './Header/Header'

const Profile = (props) => {
    return (
        <div className={ProfileCss.bg}>
            <div className={ProfileCss.profile}>
                <Header />
                <Select />
            </div>
            <Route path='/messages' render={() => <Dialogues messages={props.messages}
                addMessage={props.message} />} />
        </div>
    )
}
export default Profile;