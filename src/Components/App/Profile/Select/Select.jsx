import React from 'react'
import SelectCss from './Select.module.css'
import Couples from '../Couples/Сouples'
import Messages from '../Messages/Messages'
const Select = () => {
    return (
        <div className={SelectCss.content}>
            <Couples/>
            <Messages/>
        </div>
    )
}
export default Select;