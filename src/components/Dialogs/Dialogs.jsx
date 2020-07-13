import React from "react";
import classes from "./Dialogs.module.css"
import DialogItemsConteiner from "./DialogsItems/DialogsItemsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
            <DialogItemsConteiner />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;