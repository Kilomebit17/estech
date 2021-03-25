import React from 'react'
import uP from './UserProfile.module.css'
import sendImg from './send.svg'
import Preloader from './Preloader'
const UserProfile = (props) => {
    if (!props.profileFriend) {
        return <Preloader/>
    }
    return (
        <div className={uP.main}>
            <div className={uP.user__information}>
                <div className={uP.user__name}>{props.profileFriend.fullName}</div>
                <div className={uP.user__status}>{props.profileFriend.aboutMe}</div>
                <div className={uP.user__status}>{props.status}</div>
                <button className={uP.user__send}>Send <img src={sendImg} style={{width:'40px', paddingLeft:'10px'}}/></button>
            </div>
        </div>
    )
}
export default UserProfile;