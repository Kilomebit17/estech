import React from 'react'
import MessagesCss from './Messages.module.css'
const Messages = (props) => {
    return (
    <div className={MessagesCss.title}>{props.title}</div>
    )
}
export default Messages;