import React from 'react'
import MessageBarCss from './MessageBar.module.css'
import MessageHeader from "./MessageHeader/MessageHeader";
import SearchForm from "./SearchForm/SearchForm";
import DialoguesContainer from "./MessagePeople/DialoguesContainer";
const MessageBar = () => {
    return (
        <div className={MessageBarCss.content}>
            <div className={MessageBarCss.MHCSS}>
                <MessageHeader/>
            </div>
            <div className={MessageBarCss.SF}>
                <SearchForm/>
            </div>
            <div className={MessageBarCss.people}>
                <DialoguesContainer/>
            </div>
        </div>
    )
}
export default  MessageBar;