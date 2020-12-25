import contentReducer from "./ContentReducer";
import PageReducer from "./PageReducer";
import FriendsReducer from './FriendsReducer'
const store = {
    _state: {
        messagesPage: {
            messagesPeople: [],
            SearchForm: {
                value: '',
            },
        },
        MessagesContent: {
            message: [{ id: 0, message: '' },],
            changeValue: '',
        },
        FriendsContent: {
            friends: [
                { id: 0, friendName: 'Nazar' },
                { id: 1, friendName: 'Kostya' },
            ],
            friendsValue:'',
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.MessagesContent = contentReducer(this._state.MessagesContent, action)
        this._state.FriendsContent = FriendsReducer(this._state.FriendsContent, action)
        this._state.messagesPage = PageReducer(this._state.messagesPage, action)
    }
}
export default store;