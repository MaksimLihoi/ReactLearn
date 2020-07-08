import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";

const Messages = (props) => {

    let messagesElements = props.messageDate
        .map((messageElement) => <Message text={messageElement.text} id={messageElement.id}/>);

    let newMessageRef = React.createRef();

    let addNewMessage = () => {
        let text = newMessageRef.current.value;
        alert(text);
    }

    return (
        <div className={classes.messages}>
            {messagesElements}
            <div className={classes.textarea}>
                <textarea ref={newMessageRef}></textarea>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messages;