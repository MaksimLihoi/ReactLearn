const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";

let initializeState = {
    users: [],
};


const usersReducer = (state = initializeState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userId == user.id) {
                        console.log("follow");
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userId == user.id) {
                        console.log("unfollow");
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        }

        case SET_USERS: {
             return {...state, users: [...state.users, ...action.users]
            };
        }

        default:
            return state;
    }
};

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
};

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
};

export default usersReducer;