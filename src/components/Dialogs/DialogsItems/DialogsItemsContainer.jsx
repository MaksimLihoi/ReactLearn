import React from "react";
import DialogItems from "./DialogsItems";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogItemsContainer;