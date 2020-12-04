import React from 'react'
import SendBtnCss from './SendButton.module.css'
import img from './send.png'
const SendBtn = () => {
    return <img src={img} className={SendBtnCss.img}/>
}
export default SendBtn;