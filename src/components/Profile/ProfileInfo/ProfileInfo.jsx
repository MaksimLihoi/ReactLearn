import React from "react";
import classes from './ProfileInfo.module.css';
import Loader from "../../common/loader/Loader";
import Contact from "../Contact/Contact";
import noAvaImage
    from "../../../assets/images/social-media-avatar-social-network-computer-icons-communication-social-media.jpg"
import jobSearchLogoTrue from "../../../assets/images/jobSeachLogo.png";
import jobSearchLogoFalse from "../../../assets/images/jobSearchFalse.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (props.profile == null) {
        return <Loader/>;
    }

    let socialNetworkUrls = props.profile.contacts;
    let socialNetworksArray = [];
    let contactComponetRender = (socialNetworkUrls) => {
        for (let key in socialNetworkUrls) {
            if (socialNetworkUrls[key] != null) {
                socialNetworksArray.push(<Contact socialNetwork={key} socialNetworkUrls={socialNetworkUrls[key]}/>);
            }
        }
        return socialNetworksArray;
    };


    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img} src='https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.imgAva}
                     src={props.profile.photos.small ? props.profile.photos.small : noAvaImage}/>
                <ProfileStatus status={"Some text"}/>
                <div className={classes.fullName}>{props.profile.fullName}</div>
                <span className={classes.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</span>
                <div className={classes.descriptionBlock}>
                    <img className={classes.imgJobSearch} src={props.profile.lookingForAJob ? jobSearchLogoTrue : jobSearchLogoFalse}/>
                    {props.profile.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}
                </div>
                <div className={contactComponetRender(socialNetworkUrls).length == 0 ? null : classes.socialNetworkUrls}>
                    {socialNetworksArray}
                </div>
            </div>


        </div>
    );
}

export default ProfileInfo;