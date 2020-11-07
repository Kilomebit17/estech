import React from 'react'
import SendAreaCss from './SendArea.module.css'
const SendArea = () => {
    return (
        <div className={SendAreaCss}>
            <textarea placeholder="Введите сообщение" maxlength="5000" className={SendAreaCss.textarea}></textarea>
        </div>
    )
}
export default SendArea;