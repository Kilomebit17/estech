import {combineReducers, createStore} from "redux";
import contentReducer from "./ContentReducer";
import PageReducer from "./PageReducer";
import FriendsReducer from "./FriendsReducer";
const reducers = combineReducers({ // создает внутри себя state
    MessagesContent:contentReducer,
    messagesPage:PageReducer,
    FriendsContent:FriendsReducer,
    SearchForm:PageReducer,
})
const store = createStore(reducers)

export default store;