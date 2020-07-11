import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";


let renderAppTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

let state = store.getState();

renderAppTree(state);

store.subscribe(() => {
    let state = store.getState();
    renderAppTree(state);
});


