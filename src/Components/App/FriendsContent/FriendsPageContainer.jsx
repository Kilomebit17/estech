import React from 'react'
import {connect} from "react-redux";
import {getFetchingThunkCreator} from '../../../Redux/FriendsReducer'
import {getStatusThunkCreator} from '../../../Redux/MyProfileReducer'
import UserProfile from './FriendsBar/UserProfile';
import Preloader from './FriendsBar/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
class FriendsPageContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getFetchingThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }
    render() {
    if (!this.props.profileFriend) {
        return <Preloader />
    }
    return (
        <div>
            <UserProfile status={this.props.status}{...this.props} profileFriend={this.props.profileFriend}/>
        </div>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        profileFriend:state.FriendsContent.profileFriend,
        status:state.myProfile.status,
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {getFetchingThunkCreator,getStatusThunkCreator}),
)(FriendsPageContainer)