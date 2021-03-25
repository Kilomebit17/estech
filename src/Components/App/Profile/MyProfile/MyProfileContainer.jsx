import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyProfile from './MyProfile';
import {getMyProfileThunkCreator,updateStatusThunkCreator,setStatus} from '../../../../Redux/MyProfileReducer'
class MyProfileContainer extends Component {
    componentDidMount() {
        this.props.getMyProfileThunkCreator()
    }
    render() {
        return <MyProfile {...this.props} setStatus={this.props.setStatus} updateStatusThunkCreator={this.props.updateStatusThunkCreator} status={this.props.status} myProfile={this.props.myProfile}/>
    }
}
const mapStateToProps = (state) => {
return {
    myProfile:state.myProfile.myProfile,
    status:state.myProfile.status,
    isFetching:state.FriendsContent.isFetching,
}
}
export default compose(connect(mapStateToProps,{getMyProfileThunkCreator,updateStatusThunkCreator,setStatus}))(MyProfileContainer)