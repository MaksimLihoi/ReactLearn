import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthComponent} from "../../Hoc/HightOrderComponent";
import {compose} from "redux";

//let AuthRedirectedComponent = withAuthComponent(Messages);

const mapStateToProps = (state) => {
  return {
      newMessageText: state.dialogsPage.newMessageText,
      messageDate: state.dialogsPage.messageData,
  };
};

/*const MessagesContainer = connect(mapStateToProps, {
    addNewMessage: addMessageActionCreator,
    onChangeMessage: updateNewMessageActionCreator,
})(AuthRedirectedComponent);

export default MessagesContainer;*/

export default compose(
    connect(mapStateToProps, {
        addNewMessage: addMessageActionCreator,
        onChangeMessage: updateNewMessageActionCreator,
    }),
    withAuthComponent
)(Messages);