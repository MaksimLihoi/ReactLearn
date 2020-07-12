import React from "react";
import SideBar from "./SideBar";
import StoreContext from "../../../StoreContext";

const SideBarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => (
                <SideBar friends={store.getState().sideBar.friends}/>
            )
            }
        </StoreContext.Consumer>

    );
}

export default SideBarContainer;