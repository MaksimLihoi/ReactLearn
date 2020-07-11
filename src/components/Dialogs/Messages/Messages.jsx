import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";

const Messages = (props) => {

    let messagesElements = props.messageDate
        .map((messageElement) => <Message text={messageElement.text} id={messageElement.id}/>);

    let newMessageRef = React.createRef();

    let addNewMessage = () => {
        props.addNewMessage();
    };

    let onChangeMessage = () => {
        let text = newMessageRef.current.value;
        props.onChangeMessage(text);
    };

    return (
        <div className={classes.messages}>
            {messagesElements}
            <div className={classes.textarea}>
                <textarea onChange={onChangeMessage}
                          ref={newMessageRef}
                          value={props.newMessageText}
                          placeholder="Enter your text here..."></textarea>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messages;