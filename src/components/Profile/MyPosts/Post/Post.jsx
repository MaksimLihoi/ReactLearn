import React from "react";
import classes from './Post.module.css';
import Like from "./like/Like";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img
                    src={props.imageSrc}/>
                {props.message}
            </div>
            <Like count={props.likeCount}/>
        </div>
    );
}

export default Post;