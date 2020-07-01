import React from "react";
import classes from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            {props.name}
        </div>
    );
}

export default Dialog;