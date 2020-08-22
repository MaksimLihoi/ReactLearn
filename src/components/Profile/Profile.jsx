import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsContainer";

const Profile = (props) => {


    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsConteiner />

        </div>);
}

export default Profile;