import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
          dispatch(setUsersActionCreator(users));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;