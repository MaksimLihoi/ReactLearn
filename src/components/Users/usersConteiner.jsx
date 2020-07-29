import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    followActionCreator, setCurrentPageActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator, totalUsersCountActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import * as axios from "axios";
import Loader from "../common/loader/Loader";
import classes from './users.module.css';
import {NavLink} from "react-router-dom";


class UsersClass extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.getTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return (
            <>

                {this.props.isFetching ? <Loader className={classes.loader}/> :

                       <Users currentPage={this.props.currentPage}
                              onPageChanged={this.onPageChanged}
                              users={this.props.users}
                              totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              unfollowUser={this.props.unfollowUser}
                              followUser={this.props.followUser}/>}

            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

/*const mapDispatchToProps = (dispatch) => {
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
        getTotalUsersCount: (totalUserCount) => {
            dispatch(totalUsersCountActionCreator(totalUserCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching));
        },
    };
};*/

const UsersContainer = connect(mapStateToProps, {
    followUser: followActionCreator,
    unfollowUser: unfollowActionCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    getTotalUsersCount: totalUsersCountActionCreator,
    toggleIsFetching: toggleIsFetchingActionCreator,
})(UsersClass);

export default UsersContainer;