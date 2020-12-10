import React from 'react'
import SelectCss from './Select.module.css'
import MyProfile from '../MyProfile/MyProfile'
import Messages from '../Messages/Messages'
import Friends from "../Friends/Friends";
const Select = () => {
    return (
        <div className={SelectCss.content}>
            {/*<MyProfile/>*/}
            <Messages/>
            <Friends />
        </div>
    )
}
export default Select;