import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/ReduxStore'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter} from 'react-router-dom';
ReactDOM.render (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
reportWebVitals(); //это я хз что такое
