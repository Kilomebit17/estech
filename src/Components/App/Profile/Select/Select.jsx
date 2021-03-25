import React from 'react'
import SelectCss from './Select.module.css'
import Messages from '../Messages/Messages'
import Friends from "../Friends/Friends";
const Select = () => {
    return (
        <div className={SelectCss.content}>
            <Messages/>
            <Friends />
        </div>
    )
}
export default Select;