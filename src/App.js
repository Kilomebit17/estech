import './App.css'
import './index.css'
import React from 'react'
import Profile from './Components/App/Profile/Profile';
import Header from './Components/App/Profile/Header/Header';
import ProfileCss from './Components/App/Profile/Profile.module.css'
import Content from './Components/App/Content/Content';
const App = () => {
    return (
        <div className="App">
            <div className={ProfileCss.profile__width}>
                <Header />
                <Profile />
            </div>
                <Content /> 
        </div>
    )
}
export default App;