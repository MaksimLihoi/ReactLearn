import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";

const Messages = () => {
    let messageData = [
        {id: 1, text: "Some new text"},
        {id: 2, text: "One more text"},
        {id: 3, text: "The last one"},
    ]

    let messagesElements = messageData
        .map((messageElement) => <Message text={messageElement.text} id={messageElement.id}/>);

    return (
        <div className={classes.messages}>
            {messagesElements}
        </div>
    );
}

export default Messages;