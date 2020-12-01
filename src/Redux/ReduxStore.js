import {combineReducers, createStore} from "redux";
import contentReducer from "./ContentReducer";
import PageReducer from "./PageReducer";
const reducers = combineReducers({ // создает внутри себя state
    MessagesContent:contentReducer,
    messagesPage:PageReducer
})
const store = createStore(reducers)

export default store;