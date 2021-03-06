import React from "react";
import classes from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <img src={props.imgSrc}/>
            <NavLink to={path}  activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;