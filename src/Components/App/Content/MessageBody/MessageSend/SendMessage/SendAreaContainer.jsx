import { onWriteAction, sendMessageAction } from './../../../../../../Redux/ContentReducer'
import SendArea from "./SendArea";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        MessagesContent: state.MessagesContent
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageAction: () => {
            dispatch(sendMessageAction())
        },
        onWrite: (text) => {
            dispatch(onWriteAction(text))
        }
    }
}
const SendAreaContainer = connect(mapStateToProps, mapDispatchToProps)(SendArea)
export default SendAreaContainer;