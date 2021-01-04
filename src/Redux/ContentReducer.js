const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
const initialState = {
    message: [{ id: 0, message: ''}],
    changeValue: '',
}
const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = state.changeValue;
            let stateCopy = {...state}
            stateCopy.message = [...state.message]
            stateCopy.message.push({id: 1, message: newMessage})
            stateCopy.changeValue = ''
            return stateCopy
        }
    }
    switch (action.type) {
        case CHANGE_MESSAGE: {
            return {...state,changeValue:action.changeValue};
        }
        default:
            return state
    }
}
export const onWriteAction = (text) => {
    return {
        type: CHANGE_MESSAGE,
        changeValue: text
    }
}
export const sendMessageAction = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export default contentReducer;