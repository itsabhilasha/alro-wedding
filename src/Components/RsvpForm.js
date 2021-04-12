import React, { useState } from "react";
import "./RsvpForm.css";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";

function RsvpForm({ visible, toggleRsvp }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [brideGroom, setBrideGroom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || date === "" || brideGroom === "") {
      alert("Please enter all details");
    } else {
      console.log("submitted: ", name, date, brideGroom);
    }
  };

  return visible ? (
    <div className="rsvp__cover">
      <form className="rsvp__form" noValidate autoComplete="off">
        <div className="rsvp__title">
          <div className="rsvp__leftBuffer"></div>
          <div className="rsvp__heading">RSVP | ALRO</div>
          <Button onClick={() => toggleRsvp()}>X</Button>
        </div>
        <RadioGroup
          row
          className="rsvp__brideGroomSelection"
          aria-label="brideGroomSide"
          name="brideGroomSide"
        >
          <FormControlLabel
            value="Bride"
            control={<Radio />}
            label="Bride Side"
            checked={brideGroom === "Bride"}
            onChange={(e) => setBrideGroom(e.target.value)}
          />
          <FormControlLabel
            value="Groom"
            control={<Radio />}
            label="Groom Side"
            checked={brideGroom === "Groom"}
            onChange={(e) => setBrideGroom(e.target.value)}
          />
        </RadioGroup>
        <TextField
          className="rsvp__name"
          id="outlined-secondary"
          label="Names (separated with comma)"
          variant="outlined"
          color="secondary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="rsvp__arrivalDate"
          id="date"
          label="Arrival Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: "2021-04-20", max: "2021-04-25" } }}
          color="secondary"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button
          className="rsvp__submit"
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <div></div>
  );
}

export default RsvpForm;
