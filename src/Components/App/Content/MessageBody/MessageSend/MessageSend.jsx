import React from 'react'
import MessageSendCss from './MessageSend.module.css'
import SendGif from './SendInfo/SendGif'
import SendMusic from './SendInfo/SendMusic'
import SendInfo from './SendInfo/SendInfo'
import SendAreaContainer from "./SendMessage/SendAreaContainer";
const MessageSend = (props) => {
    return (
        <div className={MessageSendCss.content}>
            <div className={MessageSendCss.send__info}>
                <SendGif />
                <SendMusic />
                <SendInfo />
                <SendAreaContainer />
            </div>
        </div>
    )
}
export default MessageSend;