import React from 'react'
import MessageSendCss from './MessageSend.module.css'
import SendGif from './SendInfo/SendGif'
import SendMusic from './SendInfo/SendMusic'
import SendInfo from './SendInfo/SendInfo'
import SendArea from './SendMessage/SendArea'
const MessageSend = (props) => {
    return (
        <div className={MessageSendCss.content}>
            <div className={MessageSendCss.send__info}>
                <SendGif />
                <SendMusic />
                <SendInfo />
                <SendArea addMessage={props.addMessage} changeMessage={props.changeMessage} MessagesContent={props.MessagesContent}/>
            </div>
        </div>
    )
}
export default MessageSend;