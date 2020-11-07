import React from 'react'
import Header from './MessageHeader/Header'
import MessageContent from './MessageContent/MessageContent'
import MessageSend from './MessageSend/MessageSend'
import MSContentCss from './MSContent.module.css'

const MSContent = () => {
    return (
        <div className={MSContentCss.content}>
            <Header />
            <MessageContent />
            <MessageSend />
        </div>
    )
}
export default MSContent;