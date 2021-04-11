import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div id="#home" className="navigation">
        <a href="#home" className="nav-items">
          Home
        </a>
        <a href="#haldi" className="nav-items">
          Schedule
        </a>
        <a href="#rsvp" className="nav-items">
          RSVP
        </a>
        <div className="nav-items">FAQs</div>
        <div className="nav-items">Contact Us</div>
      </div>
    </>
  );
}

export default Nav;
