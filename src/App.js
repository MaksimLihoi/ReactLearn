import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Users from "./components/Users/users";
import UsersContainer from "./components/Users/usersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <Dialogs />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}


export default App;
