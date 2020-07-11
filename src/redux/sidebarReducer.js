let initializeState = {
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

};


const sidebarReducer = (state = initializeState, action) => {
    return state;
};

export default sidebarReducer;