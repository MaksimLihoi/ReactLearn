import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let newPostButton = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onChangePost = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts addPost={newPostButton}
                 updateNewPostText={onChangePost}
                 postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}/>);
};

export default MyPostsContainer;