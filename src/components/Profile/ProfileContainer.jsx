import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {profileAPI} from "../API/api";

class ProfileClass extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }

        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    };

    render() {
        return (
                <Profile {...this.props}/>
            );
    };
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithTheRouterProfileComponent = withRouter(ProfileClass);

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileActionCreator
})(WithTheRouterProfileComponent);

export default ProfileContainer;