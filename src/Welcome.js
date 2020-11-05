import './Welcome.css';
import Header from './Components/Welcome/Header/Header';
import H from './Components/Welcome/Header/Header.module.css'
import CenterTitle from './Components/Welcome/CenterTitle/CenterTitle';
import Sign from './Components/Welcome/Sign/Sign';
function Welcome() {
  return (
    <div className="App__bg">
      <div className={H.header__inner}>
        <Header/>
        <Sign />
      </div>
      <div className="App__center">
        <CenterTitle />
      </div>
    </div>
  );
}

export default Welcome;
