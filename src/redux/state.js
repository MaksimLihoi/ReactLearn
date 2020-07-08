const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: "Valera",
                    imageSrc: "https://today.ua/wp-content/uploads/2019/11/acfc79e81a538cfda851c7a56b622828__1920x-696x696.jpg"
                },
                {
                    id: 2,
                    name: "Vanya",
                    imageSrc: "https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg"
                },
                {
                    id: 3,
                    name: "Max",
                    imageSrc: "https://zefirka.net/wp-content/uploads/2018/05/strannye-foto-na-kotoryx-chto-to-ne-tak-1.jpg"
                },
                {
                    id: 4,
                    name: "Vika",
                    imageSrc: "https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg"
                },
            ],
            messageData: [
                {id: 1, text: "Some new text"},
                {id: 2, text: "One more text"},
                {id: 3, text: "The last one"},
            ],
        },

        profilePage: {
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
            newPostText: "some text",
        },

        sideBar: {
            friends: [
                {
                    name: "Vasyl",
                    id: 1,
                    imageSrc: "https://coubsecure-s.akamaihd.net/get/b29/p/coub/simple/cw_timeline_pic/ff250951a35/edc3593d938e1668ef229/med_1453411023_image.jpg"
                },
                {name: "Sebek", id: 2, imageSrc: "https://i1.sndcdn.com/artworks-000504701919-9noeex-t500x500.jpg"},
                {
                    name: "Kit",
                    id: 3,
                    imageSrc: "https://s2.cdn.teleprogramma.pro/wp-content/uploads/2019/12/b84b4b47aef2f251b56fdd48ae947e27.jpg"
                }
            ],
        },
    },

    getState() {
        return this._state;
    },

    /* addPost() {
         let newPost = {
             message: this._state.profilePage.newPostText,
             likeCount: 0,
             id: this._state.profilePage.postData.length + 1,
             imageSrc: "https://coubsecure-s.akamaihd.net/get/b29/p/coub/simple/cw_timeline_pic/ff250951a35/edc3593d938e1668ef229/med_1453411023_image.jpg",
         };
         this._state.profilePage.postData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._renderApp(this._state);
     },*/

    /*
        updateNewPostText(newText) {
            this._state.profilePage.newPostText = newText;
            this._renderApp(this._state);
        },
    */

    subscribe(observer) {
        this._renderApp = observer;
    },

    _renderApp() {
        console.log("state changed");
    },

    dispatch(action) {
        //in future this functions will be implemented outside the dispatch
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                likeCount: 0,
                id: this._state.profilePage.postData.length + 1,
                imageSrc: "https://coubsecure-s.akamaihd.net/get/b29/p/coub/simple/cw_timeline_pic/ff250951a35/edc3593d938e1668ef229/med_1453411023_image.jpg",
            };
            if (newPost.message === "") {
                alert("Сообщение не должно быть пустым!")
            } else {
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._renderApp(this._state);
            }

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._renderApp(this._state);
        }
    },

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



window.store = store;

export default store;