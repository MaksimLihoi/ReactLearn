import {authAPI, profileAPI} from "../components/API/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PHOTO";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initializeState = {
    userId: null,
    login: null,
    email: null,
    userPhoto: null,
    isAuth: false,
    isFetching: false,
};


const authReducer = (state = initializeState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        };

        default:
            return state;
    }
};

export const setUserDataActionCreator = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        userId: userId,
        email: email,
        login: login,
    }
};

export const setUserPhotoActionCreator = (userPhoto) => {
  return {
      type: SET_USER_PHOTO,
      userPhoto: userPhoto,
  }
};

export const toggleIsFetchingActionCreator = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};
export const authThunkCreator = (userId) => {

    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserDataActionCreator(id, email, login));
                profileAPI.getProfile(id)
                    .then(data => {
                        dispatch(setUserPhotoActionCreator(data.photos.small));
                    });
            };
        });
    };
};

export default authReducer;