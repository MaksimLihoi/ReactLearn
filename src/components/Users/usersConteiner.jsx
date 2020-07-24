import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    currentPageActionCreator,
    followActionCreator, pageSizeActionCreator, setCurrentPageActionCreator,
    setUsersActionCreator, totalUsersCountActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    };
};

const mapDispatchToProps = (dispatch) => {
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
        setCurrentPage: (currentPage) => {
          dispatch(setCurrentPageActionCreator(currentPage));
        },
     /*   getPageSize: (pageSize) => {
            dispatch(pageSizeActionCreator(pageSize));
        },*/
        getTotalUsersCount: (totalUserCount) => {
            dispatch(totalUsersCountActionCreator(totalUserCount));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;