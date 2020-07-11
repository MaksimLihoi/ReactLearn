import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState();

    let addNewMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    let onChangeMessage = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    };

    return (<Messages messageDate={state.dialogsPage.messageData}
                      newMessageText={state.dialogsPage.newMessageText}
                      addNewMessage={addNewMessage}
                      onChangeMessage={onChangeMessage}/>);
}

export default MessagesContainer;