import React from "react";
import classes from "./DialogsItems.module.css"
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    return (
        <div className={classes.dialogItems}>
            <Dialog name="Valera" id="1"/>
            <Dialog name="Vanya" id="2"/>
            <Dialog name="Max" id="3"/>
            <Dialog name="Vika" id="4"/>
        </div>
    );
}

export default DialogItems;