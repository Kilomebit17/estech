import React from 'react'
import img from './images/smile.svg'
import SendEmojiCss from './SendEmoji.module.css'
const SendEmoji = () => {
    return <img src={img} alt="smile-icon" className={SendEmojiCss.img}/>
}
export default SendEmoji;