import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let addNewMessage = () => {
                        let action = addMessageActionCreator();
                        store.dispatch(action);
                    };

                    let onChangeMessage = (text) => {
                        let action = updateNewMessageActionCreator(text);
                        store.dispatch(action);
                    };
                  return ( <Messages messageDate={store.getState().dialogsPage.messageData}
                                     newMessageText={store.getState().dialogsPage.newMessageText}
                                     addNewMessage={addNewMessage}
                                     onChangeMessage={onChangeMessage}/>);
                }
            }
        </StoreContext.Consumer>);
}

export default MessagesContainer;