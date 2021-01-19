import React from "react";
import F from "./FriendsBar.module.css";
import People from "./People/People";
const FriendsBar = (props) => {
  const pageCount = Math.ceil(props.totalCount / props.pageSize);
  let pageCountArr = [];
  for (let i = 1; i < pageCount; i++) {
    pageCountArr.push(i);
  }
  const people = props.FriendsContent.map((users) => (
    <People
      followThunkCreator={props.followThunkCreator}
      unFollowThunkCreator={props.unFollowThunkCreator}
      followingInProgress={props.followingInProgress}
      followStatus={props.followStatus}
      title={users.name}
      id={users.id}
      key={users.id}
      photoUrl={users.photos}
    />
  ));
  return (
    <div className={F.friends}>
      {pageCountArr.map((p) => (
        <span
          key={p.id}
          className={props.currentPage === p && F.selectSpan}
          onClick={() => props.getCurrentPage(p)}
        >
          {p}
        </span>
      ))}
      {people}
    </div>
  );
};
export default FriendsBar;
