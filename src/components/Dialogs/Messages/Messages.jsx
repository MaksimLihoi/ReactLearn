import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Message text="Some new text"/>
            <Message text="One more text"/>
            <Message text="The last one"/>
        </div>
    );
}

export default Messages;