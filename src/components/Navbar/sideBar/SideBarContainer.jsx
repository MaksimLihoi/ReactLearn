import React from "react";
import FriendSide from "./FriendSide/FriendSide";
import SideBar from "./SideBar";

const SideBarContainer = (props) => {
    let state = props.store.getState();
    return(
        <SideBar friends={state.sideBar.friends}/>
    );
}

export default SideBarContainer;