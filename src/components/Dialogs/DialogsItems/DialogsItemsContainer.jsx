import React from "react";
import DialogItems from "./DialogsItems";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {

  };
};

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogItemsContainer;