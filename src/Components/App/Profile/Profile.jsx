import React from 'react'
import ProfileCss from './Profile.module.css'
import Dialogues from './Dialogues/Dialogues'
import { Route } from 'react-router-dom'
import Select from './Select/Select'

const Profile = () => {
    return (
        <div className={ProfileCss.bg}>
            <div className={ProfileCss.profile}>
                <Select />
            </div>
            <Route path='/messages' component={Dialogues} />
        </div>
    )
}
export default Profile;