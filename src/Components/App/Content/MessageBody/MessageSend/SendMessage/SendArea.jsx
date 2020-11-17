import React from 'react'
import SendAreaCss from './SendArea.module.css'
import SendEmoji from './SendEmoji'
const SendArea = (props) => {
    debugger
    const AreaRef = React.createRef()
    
    const onWrite = () => {
        const type = AreaRef.current.value
        props.changeMessage(type)

    }
    return (
        <div className={SendAreaCss.contentFlex}>
            <div className={SendAreaCss.content}>
                <textarea onChange={onWrite}  ref={AreaRef} placeholder="Введите сообщение" maxLength="5000" value={props.MessagesContent} className={SendAreaCss.textarea} />
            </div>
            <div className={SendAreaCss.sendBtns}>
                <SendEmoji />
                <button className={SendAreaCss.btn}>Отправить</button>
            </div>
        </div>
    )
}
export default SendArea;