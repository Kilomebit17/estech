import React from 'react'
import Header from './MessageHeader/Header'
import MessageContent from './MessageContent/MessageContent'
import MessageSend from './MessageSend/MessageSend'
import MSContentCss from './MSContent.module.css'

const MSContent = (props) => {
    return (
        <div className={MSContentCss.content}>
            <Header />
            <MessageContent />
            <MessageSend addMessage={props.addMessage}/>
        </div>
    )
}
export default MSContent;