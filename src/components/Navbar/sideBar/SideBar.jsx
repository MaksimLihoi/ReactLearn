import React from "react";
import classes from "./SideBar.module.css";
import FriendSide from "./FriendSide/FriendSide";

const SideBar = (props) => {
   let friendArray = props.friends
       .map((friend) =>
            <FriendSide id={friend.id} name={friend.name} imageSrc={friend.imageSrc}/>);

    return (
        <div>
            <div className={classes.sideBar}>
                Friends
            </div>

            <div className={classes.friendsInfo}>
                {friendArray}
            </div>

        </div>
    );
}

export default SideBar;