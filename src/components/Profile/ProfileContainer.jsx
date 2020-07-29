import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";

class ProfileClass extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
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

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileActionCreator
})(ProfileClass);

export default ProfileContainer;