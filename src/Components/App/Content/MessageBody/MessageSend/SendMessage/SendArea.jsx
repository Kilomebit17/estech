import React from 'react'
import SendAreaCss from './SendArea.module.css'
import img from "./send.png";

const SendArea = (props) => {
    const onWriteArea = (e) => {
        const value = e.target.value
        props.onWrite(value)
    }
    const keyDown = (e) => {
        const emptyStr = e.target.value
        if (e.key === 'Enter') {
            props.sendMessageAction()
        } else if (emptyStr === ''){
            return emptyStr.trim()
        }
    }
    const AddMessage = () => {
        props.sendMessageAction()
    }
    return (
        <div className={SendAreaCss.contentFlex}>
            <div className={SendAreaCss.content}>
                <textarea onChange={onWriteArea} onKeyDown={keyDown} placeholder="Введите сообщение" maxLength="5000" value={props.MessagesContent.changeValue} className={SendAreaCss.textarea} />
            </div>
            <div className={SendAreaCss.sendBtns}>
                <img onClick={AddMessage} src={img} className={SendAreaCss.img}/>
            </div>
        </div>
    )
}
export default SendArea;