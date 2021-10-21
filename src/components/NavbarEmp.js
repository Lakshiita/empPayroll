import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div  style={{ display: "grid",
        /* background-color: #3b5998; */
        gridColumn: "2/3",
        justifyContent: "start",
        alignItems: "center"}}>
          <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "400", 
          textTransform: "uppercase",
          fontFamily:"sans-serif",
          color:"rgb(8, 168, 155))"}}>
            <span style={{fontSize: "3.5rem"}}>E</span>mployee
            <span style={{fontSize: "3.5rem"}}>P</span>ayroll
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/schedule">Schedule</NavLink>
            </li>
            <li>
              <NavLink to="/leave">Leave</NavLink>
            </li>
            <li>
              <NavLink to="/attendance">Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/editprofile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/salary">Salary</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>

      </nav>

    </>
  );
};

export default Navbar;
