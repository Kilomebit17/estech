import React from 'react'
import ProfileCss from './Profile.module.css'
import { Route } from 'react-router-dom'
import Select from './Select/Select'
import Header from './Header/Header'
import DialoguesContainer from "./Dialogues/DialoguesContainer";

const Profile = (props) => {
    return (
        <div className={ProfileCss.bg}>
            <div className={ProfileCss.profile}>
                <Header />
                <Select />
            </div>
            <Route path='/messages' render={() => <DialoguesContainer />} />
        </div>
    )
}
export default Profile;