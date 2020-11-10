import React from 'react'
import MessageBgCss from './MessageBg.module.css'
import img from './img/message.svg'
const MessageBg = () => {
    return (
        <div className={MessageBgCss.content}>
            <img src={img} alt="message bg" className={MessageBgCss.img}/>
            <h1 className={MessageBgCss.h1}>Поздоровайтесь</h1>
            <span className={MessageBgCss.span}>Хотите с кем-нибудь пообщаться? Тогда образуйте свою первую пару и отправьте ей сообщение во вкладке «Пары».</span>
        </div>
    )
}
export default MessageBg;