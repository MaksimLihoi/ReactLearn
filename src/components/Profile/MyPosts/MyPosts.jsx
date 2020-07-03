import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div className={classes.postsBlock}>
        My posts
        <div>
            <h3>New Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className={classes.posts}>
            <Post message="Hi, how are u?" likeCount="10"/>
            <Post message="Just second post!" likeCount="5"/>
        </div>
    </div>);
}

export default MyPosts;