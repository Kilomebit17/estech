import React from 'react'
import SendAreaCss from './SendArea.module.css'
import {reduxForm,Field} from 'redux-form'
import img from "./send.png";

const AreaSendForm = (props) => {
    const onWriteArea = (e) => {
        const value = e.target.value
        props.onWrite(value)
    }
    const keyDown = (e) => {
        const emptyStr = e.target.value
        if (e.key === 'Enter') {
            props.sendMessageAction()
        } else if(emptyStr === ''){
            return emptyStr.trim()
        }
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessage' component={'textarea'} onKeyDown={keyDown} placeholder="Введите сообщение" maxLength="5000"  className={SendAreaCss.textarea} />
        </form>
    )
}
const AreaReduxSend = reduxForm({
    form: 'send' 
})(AreaSendForm);


const SendArea = (props) => {
    const onSubmit = (dataform) => {
        console.log(dataform);
    }
    return (
        <div className={SendAreaCss.contentFlex}>
            <div className={SendAreaCss.content}>
                <AreaReduxSend {...props} onSubmit={onSubmit}/>
            </div>
            <div className={SendAreaCss.sendBtns}>
                <img onClick={props.sendMessageAction()} src={img} className={SendAreaCss.img}/>
            </div>
        </div>
    )
}
export default SendArea;