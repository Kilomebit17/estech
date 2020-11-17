import reportWebVitals from './reportWebVitals';
// import Welcome from './Welcome';
import state from './Redux/state'
import { addMessage } from './Redux/state'
import { renderEntireTree } from './Redux/render'
renderEntireTree(state, {addMessage})

reportWebVitals();
