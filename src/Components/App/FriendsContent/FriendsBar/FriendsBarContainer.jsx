import {connect} from 'react-redux'
import FriendsBar from "./FriendsBar";

const mapStateToProps = (state) => {
    return {
        FriendsContent:state.FriendsContent.friends
    }
}
const FriendsBarContainer = connect(mapStateToProps)(FriendsBar)
export default FriendsBarContainer;