import React from 'react'
import SendCss from './Send.module.css'
const Send = (props) => {
    return (
    <div className={SendCss.send}>{props.title}</div>
    )
}
export default Send;