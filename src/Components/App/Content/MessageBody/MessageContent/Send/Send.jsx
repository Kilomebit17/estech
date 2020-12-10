import React from 'react'
import SendCss from './Send.module.css'
const Send = (props) => {
    return (
    <span className={SendCss.send}>{props.title}</span>
    )
}
export default Send;