import React from 'react'
import MessageBarCss from './MessageBar.module.css'
import DialoguesContainer from "./MessagePeople/DialoguesContainer";
import SearchFormContainer from "./SearchForm/SearchFormContainer";
const MessageBar = (props) => {
    return (
        <div className={MessageBarCss.content}>
            {/*<div className={MessageBarCss.MHCSS}>*/}
            {/*    <MessageHeader/>*/}
            {/*</div>*/}
            <div className={MessageBarCss.SF}>
                <SearchFormContainer/>
            </div>
            <div className={MessageBarCss.people}>
                <DialoguesContainer/>
            </div>
        </div>
    )
}
export default  MessageBar;