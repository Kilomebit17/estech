import React from 'react'
import UserPhotoCss from './UserPhoto.module.css'
import img from '../img/b3c37a8602a8b03c79ebf64903c5971e.jpg'
const UserPhoto = () => {
    return <img src={img} alt="" className={UserPhotoCss.img}/>
}
export default UserPhoto;