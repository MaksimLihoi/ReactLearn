import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                    let newPostButton = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    };

                    let onChangePost = (text) => {
                        let action = updateNewPostActionCreator(text);
                        store.dispatch(action);
                    };

                    return (
                        <MyPosts addPost={newPostButton}
                                 updateNewPostText={onChangePost}
                                 postData={store.getState().profilePage.postData}
                                 newPostText={store.getState().profilePage.newPostText}/>);
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;