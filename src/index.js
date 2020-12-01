import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/ReduxStore'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {Provider} from "react-redux";
export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState()) // вызываем ф-цию рендера страницы
store.subscribe(() => {
    const state = store.getState()
    renderEntireTree(state)
}) // в subscribe передаем всю нашу страницу вместо импорта что бы небыло ципочки
reportWebVitals(); //это я хз что такое
