import './App.css';
import Header from './Header/Header';
import H from './Header/Header.module.css'
import Sign from './Sign/Sign';
import CenterTitle from './CenterTitle/CenterTitle';
function App() {
  return (
    <div className="App__bg">
      <div className={H.header__inner}>
        <Header />
        <Sign />
      </div>
      <div className="App__center">
        <CenterTitle />
        <CenterTitle />
      </div>
    </div>
  );
}

export default App;
