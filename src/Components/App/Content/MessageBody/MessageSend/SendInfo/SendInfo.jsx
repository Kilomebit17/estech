import React from 'react'
import SendInfoCss from './SendInfo.module.css'
import img from './images/contact-information.svg'
const SendInfo = () => {
    return <img src={img} alt="info-icon" className={SendInfoCss.img} />
}
export default SendInfo; 