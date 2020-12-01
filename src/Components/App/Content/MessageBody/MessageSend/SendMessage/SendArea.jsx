import React from 'react'
import SendAreaCss from './SendArea.module.css'
import SendEmoji from './SendEmoji'

const SendArea = (props) => {
    debugger
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
                <SendEmoji />
                <button onClick={AddMessage} className={SendAreaCss.btn}>Отправить</button>
            </div>
        </div>
    )
}
export default SendArea;