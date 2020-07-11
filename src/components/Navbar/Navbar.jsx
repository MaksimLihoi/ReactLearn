import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./sideBar/SideBar";
import SideBarContainer from "./sideBar/SideBarContainer";


const Navbar = (props) => {
    return (
        <div className={classes.nav}>
            <nav >
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <div>
               <SideBarContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Navbar;