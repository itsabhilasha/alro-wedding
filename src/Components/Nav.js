import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div id="#home" className="navigation">
        <div className="nav-items">ALRO</div>
        <a href="#haldi" className="nav-items">
          Schedule
        </a>
        <a href="#rsvp" className="nav-items">
          RSVP
        </a>
        <a href="#contactus" className="nav-items">
          Contact Us
        </a>
      </div>
    </>
  );
}

export default Nav;
