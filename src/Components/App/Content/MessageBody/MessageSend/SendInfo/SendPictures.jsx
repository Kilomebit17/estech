import React from 'react'
import SendInfoCss from './SendPictures.module.css'
import img from './../SendMessage/attach.png'
const SendPictures = () => {
    return <img src={img} alt="info-icon" className={SendInfoCss.img} />
}
export default SendPictures;