import React from "react";
import DialogItems from "./DialogsItems";
import StoreContext from "../../../StoreContext";


const DialogItemsContainer  = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store =>
                    (<DialogItems dialogsData={store.getState().dialogsPage.dialogsData}/>)
            }
        </StoreContext.Consumer>
        );
}

export default DialogItemsContainer;