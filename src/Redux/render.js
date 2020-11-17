import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import App from '../App';

export const renderEntireTree = (state, { addMessage, changeMessage}) => { // принимаем все из index.js
    ReactDOM.render(
        <React.StrictMode>
        <App state={state} addMessage={addMessage} changeMessage={changeMessage}/> 
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
