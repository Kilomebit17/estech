import React from 'react'
import SearchCss from './SearchForm.module.css'
import searchlogo from './search.png'
const SearchForm = (props) => {
    const onType = ({target}) => {
        props.SearchAction(target.value)
    }
    return (
        <div className={SearchCss.bg}>
            <div className={SearchCss.searchContent}>
                <img src={searchlogo} alt="" className={SearchCss.img}/>
                <textarea className={SearchCss.textarea} onChange={onType} placeholder='search your friends' maxLength={'30'} value={props.FriendsContent.friendsValue}/>
            </div>
        </div>
    )
}
export default SearchForm;