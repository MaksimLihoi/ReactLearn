import React from "react";
import classes from "./DialogsItems.module.css"
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";


const DialogItems = (props) => {

    let dialogsData = [
        {id: 1, name: "Valera"},
        {id: 2, name: "Vanya"},
        {id: 3, name: "Max"},
        {id: 4, name: "Vika"},
    ];

    let dialogsElements = dialogsData
        .map((dialogElement) => <Dialog name={dialogElement.name} id={dialogElement.id}/>);

    return (
        <div className={classes.dialogItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogItems;