const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initializeState = {
    postData: [
        {
            message: "Hi, how are u?",
            likeCount: 10,
            id: 1,
            imageSrc: "https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg"
        },
        {
            message: "Just second post!",
            likeCount: 6,
            id: 2,
            imageSrc: "https://zefirka.net/wp-content/uploads/2018/05/strannye-foto-na-kotoryx-chto-to-ne-tak-1.jpg"
        },
    ],
    newPostText: "",
};

const profileReducer = (state = initializeState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likeCount: 0,
                id: state.postData.length + 1,
                imageSrc: "https://coubsecure-s.akamaihd.net/get/b29/p/coub/simple/cw_timeline_pic/ff250951a35/edc3593d938e1668ef229/med_1453411023_image.jpg",
            };
            if (newPost.message === "") {

                alert("Пост не должно быть пустым!");

            } else {
                let stateCopy = {
                    ...state,
                    newPostText: '',
                    postData: [...state.postData],
                };
                stateCopy.postData.push(newPost);
                return stateCopy;
            }

        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {
                ...state,
                newPostText: action.newText,
            };
            console.log(stateCopy.newPostText);
            return stateCopy;
        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return {type: ADD_POST};
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export default profileReducer;