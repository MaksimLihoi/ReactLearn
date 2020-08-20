import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsContainer";
import Redirect from "react-router-dom/es/Redirect";

const Profile = (props) => {

    if(!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsConteiner />

        </div>);
}

export default Profile;