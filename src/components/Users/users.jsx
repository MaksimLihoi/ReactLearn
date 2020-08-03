import React from "react";
import classes from "./users.module.css";
import userAvatar
    from "../../assets/images/social-media-avatar-social-network-computer-icons-communication-social-media.jpg";
import Loader from "../common/loader/Loader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <h2>Users</h2>

            {pages.map(p => {
                return <span className={props.currentPage == p ? classes.selectedPage : ""}
                             onClick={(e) => props.onPageChanged(p)}>{p} </span>
            })}

            {
                props.users.map(user =>
                        <div key={user.id} className={classes.user}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small == null ? userAvatar : user.photos.small}
                             className={classes.userImg}/>
                        </NavLink>
                    </div>
                    <div>
                        { props.isFetching ? <Loader/> :
                            user.followed ? <button onClick={() => {
                                props.toggleIsFetching(true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "60563a6d-a692-43ac-9bf8-edc61d4b8f09",
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollowUser(user.id)
                                        }
                                        props.toggleIsFetching(false);
                                    });
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.toggleIsFetching(true);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    null,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "60563a6d-a692-43ac-9bf8-edc61d4b8f09",
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.followUser(user.id)
                                        }
                                        props.toggleIsFetching(false);
                                    });

                            }}>Follow</button>}
                    </div>
                </span>
                            <span>
                    <div className={classes.infArea}>
                        <div>
                            {user.name}
                            <span className={classes.location}>
                                {"user.location.country"},
                                {"user.location.city"}
                            </span>
                        </div>
                        <div>{user.status}</div>
                    </div>
                </span>
                        </div>
                )

            }
        </div>
    );
};

export default Users;