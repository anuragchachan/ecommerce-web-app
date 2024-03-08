import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div
        className="menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={showMenu ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
