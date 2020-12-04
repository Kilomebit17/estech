import React from 'react'
import MessageSendCss from './MessageSend.module.css'
import SendGif from './SendInfo/SendGif'
import SendPictures from './SendInfo/SendPictures'
import SendAreaContainer from "./SendMessage/SendAreaContainer";
const MessageSend = (props) => {
    return (
        <div className={MessageSendCss.content}>
            <div className={MessageSendCss.send__info}>
                <SendGif />
                <SendPictures />
                <SendAreaContainer />
            </div>
        </div>
    )
}
export default MessageSend;