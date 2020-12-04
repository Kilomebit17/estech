import React from 'react'
import SendAreaCss from './SendArea.module.css'
import img from "./send.png";

const SendArea = (props) => {
    const onWrite = (e) => {
        const value = e.target.value
        props.onWrite(value)
    }
    const AddMessage = () => {
        props.sendMessageAction()
    }
    return (
        <div className={SendAreaCss.contentFlex}>
            <div className={SendAreaCss.content}>
                <textarea onChange={onWrite} placeholder="Введите сообщение" maxLength="5000" value={props.MessagesContent.changeValue} className={SendAreaCss.textarea} />
            </div>
            <div className={SendAreaCss.sendBtns}>
                <img src={img} className={SendAreaCss.img}/>
            </div>
        </div>
    )
}
export default SendArea;