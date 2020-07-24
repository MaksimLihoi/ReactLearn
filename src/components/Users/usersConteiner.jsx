import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    followActionCreator, setCurrentPageActionCreator,
    setUsersActionCreator, totalUsersCountActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import * as axios from "axios";


class UsersClass extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.getTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
       return (
           <Users currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  unfollowUser={this.props.unfollowUser}
                  followUser={this.props.followUser}/>
       );
    };
};

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
        getTotalUsersCount: (totalUserCount) => {
            dispatch(totalUsersCountActionCreator(totalUserCount));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;