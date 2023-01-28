import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import logo from "../Header/Images/logo2.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="navbar-icon">
            {/* <img src={logo} alt="" /> */}
            {/* <h2> <Link to='/'> <span>A</span>arti  <span>S</span>oni</Link> </h2> */}
          </div>
          <ul className={click ? "nav-list active" : "nav-list"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="bars" onClick={handleClick}>
            {click ? <RiCloseLine /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
