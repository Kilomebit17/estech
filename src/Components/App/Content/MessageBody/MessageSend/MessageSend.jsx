import React from 'react'
import MessageSendCss from './MessageSend.module.css'
import SendGif from './SendInfo/SendGif'
import SendMusic from './SendInfo/SendMusic'
import SendInfo from './SendInfo/SendInfo'
import SendArea from './SendMessage/SendArea'
import SendEmoji from './SendMessage/SendEmoji'
import SendBtn from './SendMessage/SendButton'
const MessageSend = () => {
    return (
        <div className={MessageSendCss.content}>
            <div className={MessageSendCss.send__info}>
                <SendGif />
                <SendMusic />
                <SendInfo />
                <SendArea />
            </div>
            <div className={MessageSendCss.send}>
                <SendEmoji />
                <SendBtn />
            </div>
        </div>
    )
}
export default MessageSend;