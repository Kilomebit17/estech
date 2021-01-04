import React from 'react'
import { connect } from "react-redux";
import HeaderTitle from './HeaderTitle'
class HeaderTitleContainer extends React.Component {
    render() {
        return (
            <HeaderTitle messagesPeople={this.props.messagesPeople}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        messagesPeople:state.messagesPage.messagesPeople
    }
}
export default connect(mapStateToProps,{})(HeaderTitleContainer) 