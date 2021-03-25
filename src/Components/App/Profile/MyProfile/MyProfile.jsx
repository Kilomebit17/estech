import React from 'react'
import css from './MyProfile.module.css'
import Preloader from "../../FriendsContent/FriendsBar/Preloader";
import ProfileStatus from './ProfileStatus'
const MyProfile = (props) => {
    if (props.isFetching) return <Preloader />
    return (
        <div className={css.mainProfile}>
            <img src={props.myProfile.photos.large} alt="user-photo"/>
            <span className={css.fullName}>{props.myProfile.fullName}</span>
            <ProfileStatus setStatus={props.setStatus} updateStatusThunkCreator={props.updateStatusThunkCreator} status={props.status}/>
        </div>
    )
}
export default MyProfile