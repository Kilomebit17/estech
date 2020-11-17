import React from 'react'
import SendAreaCss from './SendArea.module.css'
import SendEmoji from './SendEmoji'
const SendArea = (props) => {
    debugger
    const AreaRef = React.createRef()
    const BtnRef = React.createRef()
    const sendMessage = () => {
        const Areatext = AreaRef.current.value
        props.addMessage(Areatext)
    }
    const changeColor = () => {
    }
    return (
        <div className={SendAreaCss.contentFlex}>
            <div className={SendAreaCss.content}>
                <textarea onKeyPress={changeColor} ref={AreaRef} placeholder="Введите сообщение" maxlength="5000" className={SendAreaCss.textarea}></textarea>
            </div>
            <div className={SendAreaCss.sendBtns}>
                <SendEmoji />
                <button ref={BtnRef} onClick={sendMessage} className={SendAreaCss.btn}>Отправить</button>
            </div>
        </div>
    )
}
export default SendArea;