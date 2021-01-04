import contentReducer from "./ContentReducer";
import PageReducer from "./PageReducer";
import FriendsReducer from "./FriendsReducer";
const store = {
  _state: {},
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.MessagesContent = contentReducer(this._state.MessagesContent, action);
    this._state.FriendsContent = FriendsReducer(this._state.FriendsContent, action);
    this._state.messagesPage = PageReducer(this._state.messagesPage, action);
  },
};
export default store;
