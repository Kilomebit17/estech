import './App.css'
import './index.css'
import React from 'react'
import SideBar from './Components/App/Profile/SideBar';
import ProfileCss from './Components/App/Profile/SideBar.module.css'
import Content from './Components/App/Content/Content';
import { Route } from 'react-router-dom';
import MessageBar from "./Components/App/MessageBar/MessageBar";
import FriendsPageContainer from "./Components/App/FriendsContent/FriendsPageContainer";
import FriendsPage from './Components/App/FriendsContent/FriendsPage';
const App = () => {
    return (
        <div className={ProfileCss.profile__width}>
            <Route render={() => <SideBar />} />
            <Route path='/messages/' render={() => <MessageBar />} />
            <Route path='/messages/people' render={() => <Content/>} />
            <Route path='/friends' render={() => <FriendsPage />} />
            <Route path='/profile/:userId?' render={() => <FriendsPageContainer />} />
        </div>
)
}
export default App;