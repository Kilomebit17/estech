import React from 'react'
import MessageBar from "./MessageBar";
import {connect} from "react-redux";
class MessageBarContainer extends React.Component {
    render() {
        return <MessageBar {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps,{})(MessageBarContainer);