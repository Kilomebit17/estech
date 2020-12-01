import React from 'react'
import MSContent from './MessageBody/MSContent'
import ContentCss from './Content.module.css'
const Content = (props) => {
    return (
        <div className={ContentCss.content}>
            <MSContent dispatch={props.dispatch}
                MessagesContent={props.MessagesContent}
                messageArr={props.messageArr} />
        </div>
    )
}
export default Content;