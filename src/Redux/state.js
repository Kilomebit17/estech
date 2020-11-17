import { renderEntireTree } from './render'
const state = {
    messagesPage: {
        messagesPeople: [
            { name: 'olga', id: 1 },
            { name: 'kate', id: 2 },
            { name: 'martha', id: 3 },
            { name: 'oksana', id: 4 }
        ],
        message: [{ id: 0, message: '' }]
    }
}
export const addMessage = (message) => {
    const newMessage = { id: 5, message: message };
    state.messagesPage.message.push(newMessage)
    renderEntireTree(state, { addMessage })
}
export default state;