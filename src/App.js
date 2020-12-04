import './App.css'
import './index.css'
import React from 'react'
import SideBar from './Components/App/Profile/SideBar';
import ProfileCss from './Components/App/Profile/SideBar.module.css'
import Content from './Components/App/Content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import MessageBar from "./Components/App/MessageBar/MessageBar";
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={ProfileCss.profile__width}>
                    <Route render={() => <SideBar />} />
                    <Route path='/messages' render={() => <MessageBar />} />
                </div>
                <Route path='/messages/people' render={() => <Content/>} />
            </div>
        </BrowserRouter>
    )
}
export default App;