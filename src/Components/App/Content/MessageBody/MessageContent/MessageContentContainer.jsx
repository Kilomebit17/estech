import React from 'react'
import MessageContentCss from './MessageContent.module.css'
import Send from './Send/Send'
const MessageContent = (props) => {
    const messArr = props.messageArr.map(message => <Send title={message.message} id={message.id} />)
    return (
        <div className={MessageContentCss.content}>
            <div className={MessageContentCss.send}>{messArr}</div>
        </div>
    )
}
export default MessageContent;