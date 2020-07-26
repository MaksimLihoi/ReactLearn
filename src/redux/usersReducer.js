const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT";
const PAGE_SIZE = "PAGE-SIZE";
const CURRENT_PAGE = "CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";


let initializeState = {
    users: [],
    currentPage: 1,
    pageSize: 20,
    totalUsersCount: 0,
    isFetching: false,
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
             return {...state, users: [...action.users]
            };
        };

        case TOTAL_USERS_COUNT: {
          return {...state, totalUsersCount: action.totalUserCount};
        };

        case PAGE_SIZE: {
            return {...state, pageSize: action.pageSize};
        };

        case CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        };

        case TOGGLE_IS_FETCHING: {
          return {...state, isFetching: action.isFetching}
        };

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
    };
};

export const totalUsersCountActionCreator = (totalUserCount) => {
    return {
        type: TOTAL_USERS_COUNT,
        totalUserCount: totalUserCount,
    };
};

export const setCurrentPageActionCreator = (currentPage) => {
  return {
      type: CURRENT_PAGE,
      currentPage: currentPage,
  }
};

export const toggleIsFetchingActionCreator = (isFetching) => {
    return {
      type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};


export default usersReducer;