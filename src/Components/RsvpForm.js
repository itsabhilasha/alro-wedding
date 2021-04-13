import React, { useState } from "react";
import "./RsvpForm.css";
import emailjs from "emailjs-com";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";

function RsvpForm({ visible, toggleRsvp }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [brideGroom, setBrideGroom] = useState("");
  const [waiting, setWaiting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || date === "" || brideGroom === "") {
      alert("Please enter all details");
    } else {
      setWaiting(true);

      const templateParams = {
        name: name,
        date: date,
        brideGroom: brideGroom,
      };

      emailjs
        .send(
          process.env.serviceID,
          process.env.templateID,
          templateParams,
          process.env.userID
        )
        .then(
          (result) => {
            setWaiting(false);
            setName("");
            setDate("");
            setBrideGroom("");

            if (result.text === "OK") {
              alert("RSVP Successfull!");
              toggleRsvp();
            }
          },
          (error) => {
            setWaiting(false);
            alert(
              "Error: Please try again or contact site admin if this persists."
            );
          }
        );
    }
  };

  return visible ? (
    <div className="rsvp__cover">
      {waiting ? (
        <div className="rsvp__loading">
          <CircularProgress color="secondary" />
        </div>
      ) : (
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
            InputProps={{
              inputProps: { min: "2021-04-20", max: "2021-04-25" },
            }}
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
      )}
    </div>
  ) : (
    <div></div>
  );
}

export default RsvpForm;
