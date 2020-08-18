import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    toggleFollowingProgressActionCreator,
    toggleIsFetchingActionCreator,
    totalUsersCountActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import Loader from "../common/loader/Loader";
import classes from './users.module.css';
import {usersAPI} from "../API/api";



class UsersClass extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.getTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return (
            <>

                {this.props.isFetching ? <Loader/> :

                    <Users currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           unfollowUser={this.props.unfollowUser}
                           followUser={this.props.followUser}
                           userId={this.props.userId}
                           isFetching={this.props.isFetching}
                           toggleIsFetching={this.props.toggleIsFetching}
                           followingProgress={this.props.followingProgress}
                           toggleFollowingProgress={this.props.toggleFollowingProgress}/>}

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
        followingProgress: state.usersPage.followingProgress,
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
    toggleFollowingProgress: toggleFollowingProgressActionCreator,
})(UsersClass);

export default UsersContainer;