import React from 'react'
import MessageBar from "./MessageBar";
class MessageBarContainer extends React.Component {
    render() {
        return <MessageBar {...this.props}/>
    }
}
export default MessageBarContainer;