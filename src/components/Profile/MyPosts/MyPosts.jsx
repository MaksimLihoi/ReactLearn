import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const  MyPosts = (props) => {

    let postsElements = props.postData
        .map((postElement) =>
            <Post message={postElement.message} likeCount={postElement.likeCount} id={postElement.id}
                  imageSrc={postElement.imageSrc}/>);

    let newPostRef = React.createRef();

    let newPostButton = () => {
        props.addPost();
    };

    let onChangePost = () => {
        let text = newPostRef.current.value;
        props.updateNewPostText(text);
    };

    return (<div className={classes.postsBlock}>
        My posts
        <div>
            <h3>New Post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost}
                              ref={newPostRef}
                              value={props.newPostText} placeholder="Enter your text here..."></textarea>
                </div>
                <div>
                    <button onClick={newPostButton}>Add post</button>
                </div>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;