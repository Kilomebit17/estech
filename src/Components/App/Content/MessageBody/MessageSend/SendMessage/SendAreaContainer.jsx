import React from 'react'
import SendAreaCss from './SendArea.module.css'
import SendEmoji from './SendEmoji'
import { onWriteAction, sendMessageAction } from './../../../../../../Redux/ContentReducer'

const SendArea = (props) => {
    debugger
    const newMessageValue = props.MessagesContent
    const onWrite = (e) => {
        const type = e.target.value
        props.dispatch(onWriteAction(type))
    }
    const AddMessage = () => {
        props.dispatch(sendMessageAction())
    }
    return (
        <div className={SendAreaCss.contentFlex}>
            <div className={SendAreaCss.content}>
                <textarea onChange={onWrite} placeholder="Введите сообщение" maxLength="5000" value={newMessageValue} className={SendAreaCss.textarea} />
            </div>
            <div className={SendAreaCss.sendBtns}>
                <SendEmoji />
                <button onClick={AddMessage} className={SendAreaCss.btn}>Отправить</button>
            </div>
        </div>
    )
}
export default SendArea;