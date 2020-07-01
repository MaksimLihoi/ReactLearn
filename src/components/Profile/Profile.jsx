import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img className={classes.img} src='https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>);
}

export default Profile;