import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setFriends,
  setCurrentPage,
  setTotalCount,
  setFetching,
} from "./../../../../Redux/FriendsReducer";
import * as axios from "axios";
import FriendsBar from "./FriendsBar";
import Preloader from "./Preloader";
class FriendsBarAPI extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFetching(false);
        this.props.setFriends(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  getCurrentPage = (pageNumber) => {
    this.props.setFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFetching(false);
        this.props.setFriends(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <FriendsBar
          FriendsContent={this.props.FriendsContent}
          getCurrentPage={this.getCurrentPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
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
  };
};

const FriendsBarContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setFriends,
  setCurrentPage,
  setTotalCount,
  setFetching,
})(FriendsBarAPI);
export default FriendsBarContainer;
