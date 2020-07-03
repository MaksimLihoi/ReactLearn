import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let postData = [
        {message: "Hi, how are u?", likeCount: 10, id: 1},
        {message: "Just second post!", likeCount: 6, id: 2},
    ];

    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>);
}

export default Profile;