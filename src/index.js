import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messageData = [
    {id: 1, text: "Some new text"},
    {id: 2, text: "One more text"},
    {id: 3, text: "The last one"},
];

let dialogsData = [
    {id: 1, name: "Valera"},
    {id: 2, name: "Vanya"},
    {id: 3, name: "Max"},
    {id: 4, name: "Vika"},
];

let postData = [
    {message: "Hi, how are u?", likeCount: 10, id: 1},
    {message: "Just second post!", likeCount: 6, id: 2},
];

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
