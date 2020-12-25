import {connect} from 'react-redux'
import FriendsBar from "./FriendsBar";
import {followAction,unFollowAction,setFriends,currentPageAction,setTotalCountAC} from './../../../../Redux/FriendsReducer'
const mapStateToProps = (state) => {
    return {
        FriendsContent:state.FriendsContent.friends,
        pageSize:state.FriendsContent.pageSize,
        totalCount:state.FriendsContent.totalCount,
        currentPage:state.FriendsContent.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(currentPageAction(pageNumber))
        },
        setTotalFriendsCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
const FriendsBarContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsBar)
export default FriendsBarContainer;