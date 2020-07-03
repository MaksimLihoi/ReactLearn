import React from "react";
import classes from "./FriendSide.module.css";

const FriendSide = (props) => {
    return (
        <div>
            <img className={classes.imgAva} src={props.imageSrc}/>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default FriendSide;