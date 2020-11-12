import './App.css'
import './index.css'
import React from 'react'
import Profile from './Components/App/Profile/Profile';
import Header from './Components/App/Profile/Header/Header';
import ProfileCss from './Components/App/Profile/Profile.module.css'
import Content from './Components/App/Content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import MyProfile from './Components/App/MyProfile/MyProfile';
const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={ProfileCss.profile__width}>
                    <Header />
                    <Route path='' component={Profile} />
                    <Route path='/profile' component={MyProfile} />
                </div>
                <Route path='/messages/people' component={Content} />
            </div>
        </BrowserRouter>
    )
}
export default App;