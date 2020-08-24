import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "60563a6d-a692-43ac-9bf8-edc61d4b8f09",
        }
    }
);


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

};

export const followAPI = {

    followUser(userId) {
        return instance.post('follow/' + userId, null)
            .then(response => {
                return response.data
            })
    },

    unfollowUser(userId) {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response.data
            })
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(response => {
                return response.data
            });
    },
    setStatus(status) {
        return instance.put('profile/status/', {status: status});
    },

};

export const authAPI = {
    authMe() {
        return instance.get('auth/me').then(response => {return response.data});
    }
};