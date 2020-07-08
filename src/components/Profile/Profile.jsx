import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     dispatch={props.dispatch} //function
                     newPostText={props.newPostText}/>

        </div>);
}

export default Profile;