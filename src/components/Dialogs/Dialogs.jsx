import React from "react";
import classes from "./Dialogs.module.css"
import DialogItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
            <DialogItems dialogsData={props.dialogsData}/>
            <Messages messageDate={props.messageData}/>
        </div>
    );
}

export default Dialogs;