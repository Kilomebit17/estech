import React from 'react'
import ContentCss from './Content.module.css'
import Header from './MessageBody/MessageHeader/Header'

const Content = () => {
    return (
        <div className={ContentCss.content}>
            <Header /> 
        </div>
    )
}
export default Content;