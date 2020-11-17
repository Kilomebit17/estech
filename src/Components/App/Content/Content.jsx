import React from 'react'
import MSContent from './MessageBody/MSContent'
import ContentCss from './Content.module.css'
const Content = (props) => {
    debugger
    return (
        <div className={ContentCss.content}>
            <MSContent addMessage={props.addMessage} changeMessage={props.changeMessage} MessagesContent={props.MessagesContent} />
        </div>
    )
}
export default Content;