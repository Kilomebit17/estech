import './App.css'
import './index.css'
import React from 'react'
import Profile from './Components/App/Profile/Profile';
import ProfileCss from './Components/App/Profile/Profile.module.css'
import Content from './Components/App/Content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import MyProfile from './Components/App/MyProfile/MyProfile';
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={ProfileCss.profile__width}>
                    <Route render={() => <Profile />} />
                    <Route path='/profile' render={() => <MyProfile />} />
                </div>
                <Route path='/messages/people' render={() => <Content/>} />
            </div>
        </BrowserRouter>
    )
}
export default App;