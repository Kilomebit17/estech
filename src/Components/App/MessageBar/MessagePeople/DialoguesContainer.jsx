import {connect} from "react-redux";
import Dialogues from "./Dialogues";

const mapStateToProps = (state) => {
    debugger
    return {
        messagesPeople: state.messagesPage.messagesPeople
    }
}
const DialoguesContainer = connect(mapStateToProps)(Dialogues)
export default DialoguesContainer;