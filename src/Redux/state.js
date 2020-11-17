import { renderEntireTree } from './render'
const state = {
    messagesPage: {
        messagesPeople: [
            { name: 'olga', id: 1 },
            { name: 'kate', id: 2 },
            { name: 'martha', id: 3 },
            { name: 'oksana', id: 4 }
        ],
    },
    MessagesContent: {
        message: [{ id: 0, message: '' }],
        messagesValue: ''
    }
}
export let addMessage = (message) => {
    const newMessage = { id: 5, message: message };
    state.MessagesContent.message.push(newMessage)
    renderEntireTree(state, { addMessage }) // принимаем все из render.js
}
export let changeMessage = (messageValue) => {
    state.MessagesContent.messagesValue = messageValue
    renderEntireTree(state, { addMessage, changeMessage }) // принимаем все из render.js
}
export default state;