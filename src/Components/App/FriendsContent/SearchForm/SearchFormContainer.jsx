import SearchForm from './SearchForm'
import { friendsSearchAction } from './../../../../Redux/FriendsReducer'
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        FriendsContent:state.FriendsContent
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchAction: (text) => {
            dispatch(friendsSearchAction(text))
        }
    }
}
const SearchFormContainer = connect(mapStateToProps,mapDispatchToProps)(SearchForm)
export default SearchFormContainer;