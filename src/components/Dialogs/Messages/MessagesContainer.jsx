import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
      newMessageText: state.dialogsPage.newMessageText,
      messageDate: state.dialogsPage.messageData,
  };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChangeMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
    };
};


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;