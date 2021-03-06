import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    };
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
    };
};*/

const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostActionCreator,
    updateNewPostText: updateNewPostActionCreator,
})(MyPosts);


export default MyPostsContainer;