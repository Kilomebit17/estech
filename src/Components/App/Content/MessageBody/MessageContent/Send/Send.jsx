import React from 'react'
import SendCss from './Send.module.css'
const Send = (props) => {
    debugger
    return (
    <div className={SendCss.send}>{props.title}</div>
    )
}
export default Send;