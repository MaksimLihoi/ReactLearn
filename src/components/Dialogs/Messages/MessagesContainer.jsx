import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
      newMessageText: state.dialogsPage.newMessageText,
      messageDate: state.dialogsPage.messageData,
  };
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChangeMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
    };
};*/


const MessagesContainer = connect(mapStateToProps, {
    addNewMessage: addMessageActionCreator,
    onChangeMessage: updateNewMessageActionCreator,
})(Messages);

export default MessagesContainer;