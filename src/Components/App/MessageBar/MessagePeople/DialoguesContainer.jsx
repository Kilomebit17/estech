import {connect} from "react-redux";
import Dialogues from "./Dialogues";

const mapStateToProps = (state) => {
    return {
        messagesPeople: state.messagesPage.messagesPeople
    }
}
const DialoguesContainer = connect(mapStateToProps)(Dialogues)
export default DialoguesContainer;