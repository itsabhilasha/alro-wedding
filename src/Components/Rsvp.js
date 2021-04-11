import React from "react";
import "./Rsvp.css";

function Rsvp() {
  return (
    <>
      <div id="rsvp" className="rsvp">
        <h3 className="rsvp-msg">
          If you would like to attend the events, please click the link below
          and fill in the details so that we can make arrangements for you.
        </h3>
        <button className="rsvp-btn">RSVP</button>
        <div className="spacing"></div>
      </div>
    </>
  );
}

export default Rsvp;
