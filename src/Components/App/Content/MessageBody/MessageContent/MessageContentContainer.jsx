import {connect} from "react-redux";
import MessageContent from "./MessageContent";

const mapStateToProps = (state) => {
    return {
        MessagesContent: state.MessagesContent
    }
}
const MessageContentContainer = connect(mapStateToProps)(MessageContent)
export default MessageContentContainer;