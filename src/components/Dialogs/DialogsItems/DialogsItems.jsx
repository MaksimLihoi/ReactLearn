import React from "react";
import classes from "./DialogsItems.module.css"
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";


const DialogItems = (props) => {

    let dialogsElements = props.dialogsData
        .map((dialogElement) => <Dialog name={dialogElement.name} id={dialogElement.id} imgSrc={dialogElement.imageSrc}/>);

    return (
        <div className={classes.dialogItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogItems;