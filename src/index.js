import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/style.css'
import App from './App';
import store from './Redux';
import { Provider } from 'react-redux';
require("bootstrap");
require("popper.js");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
