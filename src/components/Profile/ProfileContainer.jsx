import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";


class ProfileClass extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.setUserProfile(userId);
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
    setUserProfile: setUserProfileThunkCreator,
})(WithTheRouterProfileComponent);

export default ProfileContainer;