import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sideBar={props.stateData.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={props.stateData.dialogsPage.dialogsData}
                                                  messageData={props.stateData.dialogsPage.messageData}/>}/>
                    <Route path="/profile" render={() => <Profile postData={props.stateData.profilePage.postData}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
