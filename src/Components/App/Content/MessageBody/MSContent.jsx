import React from 'react'
import Header from './MessageHeader/Header'
import MessageSend from './MessageSend/MessageSend'
import MSContentCss from './MSContent.module.css'
import MessageContentContainer from "./MessageContent/MessageContentContainer";

const MSContent = () => {
    return (
        <div className={MSContentCss.content}>
            <Header />
            <MessageContentContainer />
            <div className={MSContentCss.msFlex}>
                <MessageSend />
            </div>
        </div>
    )
}
export default MSContent;