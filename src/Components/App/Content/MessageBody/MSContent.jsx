import React from 'react'
import Header from './MessageHeader/Header'
import MessageSend from './MessageSend/MessageSend'
import MSContentCss from './MSContent.module.css'
import MessageContentContainer from "./MessageContent/MessageContentContainer";

const MSContent = (props) => {
    return (
        <div className={MSContentCss.content}>
            <Header />
            <MessageContentContainer />
            <MessageSend />
        </div>
    )
}
export default MSContent;