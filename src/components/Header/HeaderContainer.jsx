import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {
    toggleIsFetchingActionCreator,
    setUserDataActionCreator,
    setUserPhotoActionCreator
} from "../../redux/authReducer";
import Loader from "../common/loader/Loader";
import classes from './Header.module.css';
import {authAPI, profileAPI} from "../API/api";

class HeaderClass extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login);
                this.setProfilePhoto(id);
            };
            this.props.toggleIsFetching(false);
        });
    };

    setProfilePhoto = (userId) => {
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserPhoto(data.photos.small);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader className={classes.loader}/> : <Header {...this.props}/>}
            </>);
    };

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        userPhoto: state.authPage.userPhoto,
    };
};

const HeaderContainer = connect(mapStateToProps, {
    setUserData: setUserDataActionCreator,
    setUserPhoto: setUserPhotoActionCreator,
    toggleIsFetching: toggleIsFetchingActionCreator,
})(HeaderClass);

export default HeaderContainer;