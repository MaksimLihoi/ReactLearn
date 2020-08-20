import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    toggleFollowingProgressActionCreator,
    toggleIsFetchingActionCreator,
    totalUsersCountActionCreator,
    unfollowThunkCreator
} from "../../redux/usersReducer";
import Loader from "../common/loader/Loader";




class UsersClass extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
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
                           followingProgress={this.props.followingProgress}
                    />}

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
    followUser: followThunkCreator,
    unfollowUser: unfollowThunkCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    getTotalUsersCount: totalUsersCountActionCreator,
    toggleIsFetching: toggleIsFetchingActionCreator,
    toggleFollowingProgress: toggleFollowingProgressActionCreator,
    getUsers: getUsersThunkCreator,
})(UsersClass);

export default UsersContainer;