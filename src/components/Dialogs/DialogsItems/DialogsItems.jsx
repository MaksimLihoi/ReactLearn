import React from "react";
import classes from "./DialogsItems.module.css"
import Dialog from "./Dialog/Dialog";

const DialogItems = (props) => {
    return (
        <div className={classes.dialogItems}>
            <Dialog name="Valera" />
            <Dialog name="Vanya" />
            <Dialog name="Max" />
            <Dialog name="Vika" />
        </div>
    );
}

export default DialogItems;