import React from "react";
import DialogItems from "./DialogsItems";


const DialogItemsContainer  = (props) => {
    let state = props.store.getState();
    return (<DialogItems dialogsData={state.dialogsPage.dialogsData}/>);
}

export default DialogItemsContainer;