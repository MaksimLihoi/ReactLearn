import React from "react";
import classes from "./Dialogs.module.css"
import DialogItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let messageData = [
        {id: 1, text: "Some new text"},
        {id: 2, text: "One more text"},
        {id: 3, text: "The last one"},
    ];

    let dialogsData = [
        {id: 1, name: "Valera"},
        {id: 2, name: "Vanya"},
        {id: 3, name: "Max"},
        {id: 4, name: "Vika"},
    ];

    return (
        <div className={classes.dialogs}>
            <DialogItems dialogsData={dialogsData}/>
            <Messages messageDate={messageData}/>
        </div>
    );
}

export default Dialogs;