import React from "react"
import MHCSS from './MessageHeader.module.css'
const MessageHeader = () => {
    return (
        <div className={MHCSS.content}>
            <div className={MHCSS.title}>Messages</div>
        </div>
    )
}
export default  MessageHeader