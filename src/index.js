import React from "react";
import ReactDOM from "react-dom/client";
import './css/style.css'
import { Provider } from 'react-redux';
import App from "./js/App";
import store from "./Redux";
require("bootstrap");
require("popper.js");


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
