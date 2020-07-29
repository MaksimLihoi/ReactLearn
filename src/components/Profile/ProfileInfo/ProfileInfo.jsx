import React from "react";
import classes from './ProfileInfo.module.css';
import Loader from "../../common/loader/Loader";
import Contact from "../Contact/Contact";

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

    /* let i = 0;
     for(let key in socialNetworkUrls) { if(socialNetworkUrls[key] != null){ socialNetworkArray[i] = <Contact socialUrl={socialNetworkUrls[key]} nameKey={key}/> i++;
         }
     }*/


    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img} src='https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.imgAva} src={props.profile.photos.small}/>
                <div className={classes.fullName}>{props.profile.fullName}</div>
                <span className={classes.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</span>
                <div>
                    {contactComponetRender(socialNetworkUrls)}</div>
            </div>


        </div>
    );
}

export default ProfileInfo;