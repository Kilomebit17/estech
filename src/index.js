import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import { addMessage } from './Redux/state'
import { changeMessage } from './Redux/state'
import { renderEntireTree } from './Redux/render'
renderEntireTree(state, {addMessage, changeMessage}) // отдаем все из state

reportWebVitals();
