import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthComponent} from "../Hoc/HightOrderComponent";


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

let AuthRedirectedComponent = withAuthComponent(ProfileClass);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlRouterProfileComponent = withRouter(AuthRedirectedComponent);

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileThunkCreator,
})(WithUrlRouterProfileComponent);

export default ProfileContainer;