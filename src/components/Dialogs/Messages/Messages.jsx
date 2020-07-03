import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";

const Messages = (props) => {


    let messagesElements = props.messageDate
        .map((messageElement) => <Message text={messageElement.text} id={messageElement.id}/>);

    return (
        <div className={classes.messages}>
            {messagesElements}
        </div>
    );
}

export default Messages;