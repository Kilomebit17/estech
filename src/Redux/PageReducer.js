const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
const initialState = {
    MessagesContent: {
        message: [{ id: 0, message: '' },],
        changeValue: '',
    }
}
const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = state.changeValue;
            state.message.push({id: 1, message: newMessage})
            state.changeValue = ''
            return  state
        case CHANGE_MESSAGE:
            state.changeValue = action.changeValue
            return state;
        default: return  state
    }
}
export const onWriteAction = (type) => {
    return {
        type: CHANGE_MESSAGE,
        changeValue: type
    }
}
export const sendMessageAction = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export default contentReducer;