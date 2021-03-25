import React from "react";
import SFCSS from './SearchForm.module.css'
import searchimg from './search.png'
import {Field, reduxForm} from 'redux-form'
const searchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field maxLength='10' className={SFCSS.searchform} name='searchAreaMessBar' component='textarea' placeholder='Search People'/>
        </form>
    )
};
const SearchFormRedux = reduxForm({form:'dialogSearchForm'})(searchForm);
const SearchForm = (props) => {
    const changeValue = (values) => {
        console.log(values)
    };
    return (
        <div className={SFCSS.form}>
            <img src={searchimg} alt="search img logo" className={SFCSS.img}/>
            <SearchFormRedux onSubmit={changeValue} {...props}/>
        </div>
    )
    
};
export default SearchForm;