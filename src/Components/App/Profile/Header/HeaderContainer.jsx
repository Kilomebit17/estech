import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthThunkCreator } from "../../../../Redux/authReducer";
import { withAuthRedirect } from "../../../../HOC/withAuthRedirect";
import { compose } from "redux";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthThunkCreator();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth:state.auth.isAuth
  };
};

export default compose(
  connect(mapStateToProps, { getAuthThunkCreator }),
  // withAuthRedirect,
)(HeaderContainer);
