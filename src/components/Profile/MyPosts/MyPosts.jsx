import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElements = props.postData
        .map((postElement) =>
            <Post message={postElement.message} likeCount={postElement.likeCount} id={postElement.id}/>);

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
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;