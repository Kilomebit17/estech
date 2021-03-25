import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getFriendsThunkCreator,
  followThunkCreator,
  unFollowThunkCreator,
} from "./../../../../Redux/FriendsReducer";
import FriendsBar from "./FriendsBar";
import Preloader from "./Preloader";
// import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";
class FriendsBarAPI extends React.Component {
  componentDidMount() {
    this.props.getFriendsThunkCreator(this.props.currentPage,this.props.pageSize)
  }
  getCurrentPage = (pageNumber) => {
    this.props.getFriendsThunkCreator(pageNumber,this.props.pageSize)
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <FriendsBar
          FriendsContent={this.props.FriendsContent}
          followStatus={this.props.followStatus}
          getCurrentPage={this.getCurrentPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          followThunkCreator={this.props.followThunkCreator}
          unFollowThunkCreator={this.props.unFollowThunkCreator}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    FriendsContent: state.FriendsContent.friends,
    pageSize: state.FriendsContent.pageSize,
    totalCount: state.FriendsContent.totalCount,
    currentPage: state.FriendsContent.currentPage,
    isFetching: state.FriendsContent.isFetching,
    followingInProgress:state.FriendsContent.followingInProgress,
    followStatus:state.FriendsContent.followStatus,
  };
};
// let friendsRedirect = withAuthRedirect(FriendsBarAPI)
export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
  getFriendsThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
}))(FriendsBarAPI)
