import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../img/logo.png";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <img className="header-icon" src={logo} alt="" />
      <div className="header-center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header-right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
