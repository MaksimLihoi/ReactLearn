const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initializeState = {
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
        newMessageText: ""
};

const dialogsReducer = (state = initializeState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messageData.length + 1,
                text: state.newMessageText,
            };

            if (newMessage.text === "") {

                alert("Сообщение не должно быть пустым!");

            } else {
                return {
                    ...state,
                    newMessageText:  '',
                    messageData: [...state.messageData, newMessage],
                };
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            console.log(stateCopy.newMessageText);
            return stateCopy;

        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
};

export default dialogsReducer;