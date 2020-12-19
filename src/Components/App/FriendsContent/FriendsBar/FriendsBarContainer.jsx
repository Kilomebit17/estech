import {connect} from 'react-redux'
import FriendsBar from "./FriendsBar";
import {followAction,unFollowAction,setFriends} from './../../../../Redux/FriendsReducer'
const mapStateToProps = (state) => {
    return {
        FriendsContent:state.FriendsContent.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAction(userId))
        },
        setFriends: (friends) => {
            dispatch(setFriends(friends))
        }
    }
}
const FriendsBarContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsBar)
export default FriendsBarContainer;