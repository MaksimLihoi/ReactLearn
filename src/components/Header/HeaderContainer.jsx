import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    toggleIsFetchingActionCreator,
    setUserDataActionCreator,
    setUserPhotoActionCreator
} from "../../redux/authReducer";
import Loader from "../common/loader/Loader";
import classes from './Header.module.css';

class HeaderClass extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
                this.setProfilePhoto(id);
            };
            this.props.toggleIsFetching(false);
        });
    };

    setProfilePhoto = (userId) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserPhoto(response.data.photos.small);
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