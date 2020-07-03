import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img} src='https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;