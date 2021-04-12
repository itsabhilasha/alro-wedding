import React, { useState } from "react";
import "./RsvpForm.css";

function RsvpForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [brideGroom, setBrideGroom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted: ", name, date, brideGroom);
  };

  return (
    <div className="rsvp__cover">
      <form className="rsvp__form" onSubmit={handleSubmit}>
        <div className="rsvp__title">RSVP | ALRO</div>
        <div className="rsvp__brideGroomSelection">
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Bride"
                checked={brideGroom === "Bride"}
                onChange={(e) => setBrideGroom(e.target.value)}
              />
              Bride Side
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Groom"
                checked={brideGroom === "Groom"}
                onChange={(e) => setBrideGroom(e.target.value)}
              />
              Groom Side
            </label>
          </div>
        </div>
        <label className="rsvp__arrivalDate">Names:</label>
        <input
          type="text"
          placeholder="separate with comma"
          className="rsvp__name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="rsvp__arrivalDate">Arrival Date:</label>
        <input
          type="date"
          min="2021-04-20"
          max="2021-04-25"
          className="rsvp__name"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input className="rsvp__submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RsvpForm;
