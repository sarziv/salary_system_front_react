import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {Provider}from "react-redux";
import { createStore } from 'redux';
import ReducerCombine from './reducers/ReducerCombine';

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(ReducerCombine,window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
            <BrowserRouter>
                        <App />
            </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
