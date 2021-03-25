import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer } from 'redux-form'
import contentReducer from "./ContentReducer";
import PageReducer from "./PageReducer";
import FriendsReducer from "./FriendsReducer";
import authReducer from './authReducer'
import thunkMiddleware from "redux-thunk"
import MyProfileReducer from "./MyProfileReducer";
const reducers = combineReducers({ // создает внутри себя state
    MessagesContent:contentReducer,
    messagesPage:PageReducer,
    FriendsContent:FriendsReducer,
    SearchForm:PageReducer,
    auth:authReducer,
    myProfile:MyProfileReducer,
    form:formReducer
})
const store = createStore(reducers,applyMiddleware(thunkMiddleware)) //для общения с DAL lvl
console.log(store.getState())
export default store;