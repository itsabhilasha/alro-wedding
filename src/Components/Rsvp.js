import React from "react";
import "./Rsvp.css";

function Rsvp({ toggleRsvp }) {
  return (
    <>
      <div id="rsvp" className="rsvp">
        <div className="schedule__rsvpContent">
          <h2>Confirm Your Presence</h2>
          <h3 className="rsvp-msg">
            If you would like to attend the events, please click the link below
            and fill in the details so that we can make arrangements for you.
          </h3>
          <button onClick={() => toggleRsvp()} className="rsvp-btn">
            RSVP
          </button>
          <div className="spacing"></div>
        </div>
      </div>
    </>
  );
}

export default Rsvp;
