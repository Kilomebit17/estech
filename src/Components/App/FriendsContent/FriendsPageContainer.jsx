import React from 'react'
import {connect} from "react-redux";
import {getFetchingThunkCreator} from '../../../Redux/FriendsReducer'
import UserProfile from './FriendsBar/UserProfile';
import Preloader from './FriendsBar/Preloader';
import { withRouter } from 'react-router-dom';
class FriendsPageContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getFetchingThunkCreator(userId)
    }
    render() {
    if (!this.props.profileFriend) {
        return <Preloader />
    }
    return (
        <div>
            <UserProfile {...this.props} profileFriend={this.props.profileFriend}/>
        </div>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        profileFriend:state.FriendsContent.profileFriend,
    }
}
const WithUrlDataContainerComponent = withRouter(FriendsPageContainer)
export default connect(mapStateToProps, {getFetchingThunkCreator})(WithUrlDataContainerComponent);
