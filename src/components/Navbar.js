import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>E</span>mployee
            <span>P</span>ayroll
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Admin Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Login</NavLink>
            </li>
            <li>
              <NavLink to="/service">Add/Delete Emp</NavLink>
            </li>
            <li>
              
              <NavLink to="/schedule">Schedule</NavLink>
            </li>
            <li>
              
              <NavLink to="/salary">Salary</NavLink>
            </li>
          </ul>
        </div>

      </nav>

    </>
  );
};

export default Navbar;
