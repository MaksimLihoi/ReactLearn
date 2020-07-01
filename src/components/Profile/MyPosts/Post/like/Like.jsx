import React from "react";
import classes from "./Like.module.css"

const Like = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <span className={classes.likeTxt}>Like </span>
                {props.count}
            </div>
        </div>
    );
}

export default Like;