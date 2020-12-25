import React from 'react'
import FriendsPageCss from './FriendsPage.module.css'
import SearchFormContainer from "./SearchForm/SearchFormContainer";
import FriendsBarContainer from "./FriendsBar/FriendsBarContainer";
const FriendsPage = (props) => {
    return (
        <div className={FriendsPageCss.content}>
            <SearchFormContainer />
            <FriendsBarContainer  />
        </div>
    )
}
export default FriendsPage;
