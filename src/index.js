import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import StoreContext, {Provider} from "./StoreContext";


let renderAppTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App state={state} store={store}/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
};

let state = store.getState();

renderAppTree(state);

store.subscribe(() => {
    let state = store.getState();
    renderAppTree(state);
});


