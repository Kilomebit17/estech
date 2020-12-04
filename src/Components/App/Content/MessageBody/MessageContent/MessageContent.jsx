import React from 'react'
import MessageContentCss from './MessageContent.module.css'
import Send from './Send/Send'
const MessageContent = (props) => {
    const mess = props.MessagesContent.message.map(message => {
    return <Send title={message.message} id={message.id} />
})
    return (
        <div className={MessageContentCss.content}>
            <div className={MessageContentCss.send}>{mess}</div>
        </div>
    )
}
export default MessageContent;