import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./ContentReducer";
import PageReducer from "./PageReducer";
import FriendsReducer from "./FriendsReducer";
import authReducer from './authReducer'
import thunkMiddleware from "redux-thunk"
const reducers = combineReducers({ // создает внутри себя state
    MessagesContent:contentReducer,
    messagesPage:PageReducer,
    FriendsContent:FriendsReducer,
    SearchForm:PageReducer,
    auth:authReducer    
})
const store = createStore(reducers,applyMiddleware(thunkMiddleware)) //для общения с DAL lvl
console.log(store.getState())
export default store;