import React from "react";
import SearchForm from "./SearchForm";
import {connect} from "react-redux";
import {SearchAction} from './../../../../Redux/PageReducer'

const mapStateToProps = (state) => {
    return {
        SearchForm:state.value
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchWrite: (text) => {
            dispatch(SearchAction(text))
        }
    }
}
const SearchFormContainer = connect(mapStateToProps,mapDispatchToProps)(SearchForm)
export default SearchFormContainer;