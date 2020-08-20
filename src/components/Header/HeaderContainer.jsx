import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {
    toggleIsFetchingActionCreator,
    setUserDataActionCreator,
    setUserPhotoActionCreator, authThunkCreator
} from "../../redux/authReducer";
import Loader from "../common/loader/Loader";
import classes from './Header.module.css';
import {authAPI, profileAPI} from "../API/api";

class HeaderClass extends React.Component {
    componentDidMount() {
        this.props.authMe();
    };

    /* setProfilePhoto = (userId) => {
         profileAPI.getProfile(userId)
             .then(data => {
                 this.props.setUserPhoto(data.photos.small);
             });
     };*/

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
    authMe: authThunkCreator,
})(HeaderClass);

export default HeaderContainer;