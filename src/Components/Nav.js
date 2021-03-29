import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="navigation">
        <div className="nav-items">Home</div>
        <div className="nav-items">Schedule</div>
        <div className="nav-items">RSVP</div>
        <div className="nav-items">Travel Tips</div>
        <div className="nav-items">Contact Us</div>
      </div>
    </>
  );
}

export default Nav;
