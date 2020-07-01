import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div className={classes.posts}>
        My posts
        <div>
            New Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <div>
            <Post message="Hi, how are u?" likeCount="10"/>
            <Post message="Just second post!" likeCount="5"/>
        </div>
    </div>);
}

export default MyPosts;