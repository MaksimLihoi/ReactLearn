import React from "react";
import classes from './Post.module.css';
import Like from "./like/Like";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img
                    src="https://st.depositphotos.com/1757583/2169/i/450/depositphotos_21696885-stock-photo-yin-yang-symbol.jpg"/>
                {props.message}
            </div>
            <Like count={props.likeCount}/>
        </div>
    );
}

export default Post;