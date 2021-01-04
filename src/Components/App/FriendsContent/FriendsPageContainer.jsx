import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileFriend,setFetching} from '../../../Redux/FriendsReducer'
import UserProfile from './FriendsBar/UserProfile';
import Preloader from './FriendsBar/Preloader';
import { withRouter } from 'react-router-dom';
class FriendsPageContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.setFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                console.log(response);
                this.props.setFetching(false);
                this.props.setProfileFriend(response.data);
            });
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
        isFetching:state.FriendsContent.isFetching
    }
}
const WithUrlDataContainerComponent = withRouter(FriendsPageContainer)
export default connect(mapStateToProps, {setProfileFriend,setFetching})(WithUrlDataContainerComponent);
