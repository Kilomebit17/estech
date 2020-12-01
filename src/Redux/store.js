import contentReducer from "./ContentReducer";
const store = {
    _state: {
        messagesPage: {
            messagesPeople: [
                { name: 'olga', id: 1 },
                { name: 'kate', id: 2 },
                { name: 'martha', id: 3 },
                { name: 'oksana', id: 4 },
            ],
        },
        MessagesContent: {
            message: [{ id: 0, message: '' },],
            changeValue: '',
        },
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.MessagesContent = contentReducer(this._state.MessagesContent, action)
        this._renderEntireTree(this._state)
    },
    _renderEntireTree() { },
    subscribe(observe) {
        this._renderEntireTree = observe
    }

}
console.log(store);
export default store;