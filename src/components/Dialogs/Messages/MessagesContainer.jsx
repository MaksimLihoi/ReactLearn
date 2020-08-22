import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthComponent} from "../../Hoc/HightOrderComponent";

let AuthRedirectedComponent = withAuthComponent(Messages);

const mapStateToProps = (state) => {
  return {
      newMessageText: state.dialogsPage.newMessageText,
      messageDate: state.dialogsPage.messageData,
  };
};

const MessagesContainer = connect(mapStateToProps, {
    addNewMessage: addMessageActionCreator,
    onChangeMessage: updateNewMessageActionCreator,
})(AuthRedirectedComponent);

export default MessagesContainer;