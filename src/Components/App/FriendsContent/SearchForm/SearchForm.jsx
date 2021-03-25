import React from 'react'
import SearchCss from './SearchForm.module.css'
import searchlogo from './search.png'
import {Field, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLengthCreator,
    requiredField
} from "../../../../utils/validations/formValidator";
import {TextArea} from "../../../common/FromsControl/FormsControl";
const maxLength30 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);
const SearchArea = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={SearchCss.textarea} maxLength={'11'} name='searchAreaFriendsBar' component={TextArea} placeholder='search your friends' validate={[requiredField,maxLength30,minLength3]}/>
        </form>
    )
};
const SearchAreaRedux = reduxForm({form:'friendsFormSearch'})(SearchArea);
const SearchForm = () => {
    return (
        <div className={SearchCss.bg}>
            <div className={SearchCss.searchContent}>
                <img src={searchlogo} alt="" className={SearchCss.img}/>
                <SearchAreaRedux />
            </div>
        </div>
    )
};
export default SearchForm;