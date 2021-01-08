import React from "react";
import HeaderCss from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <NavLink to="/my-profile">
      <div className={HeaderCss.header}>
        <div className={HeaderCss.header__logo}>
          {props.isAuth ? <h1 className={HeaderCss.header__login}>{props.login}</h1> : <NavLink to={'login'}><button>login</button></NavLink>}
        </div>
      </div>
    </NavLink>
  );
};
export default Header;
