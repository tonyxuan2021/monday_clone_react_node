import React from "react";
import logo from "../images/WebDesign-logos.jpeg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img className="nav_logo" src={logo} alt={logo}></img>
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/ticket")}>
          +
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          T
        </div>
      </div>
    </nav>
  );
};

export default Nav;
