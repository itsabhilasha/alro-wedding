import React from "react";
import "./InviteSection.css";

var countDownDate = new Date("Apr 25, 2021 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function InviteSection() {
  return (
    <>
      <div className="peacock-message">
        <div className="message">
          <div>Dear relatives & friends,</div>
          <div className="msg-body">
            We are delighted to share our love and joy with you! It would be our
            utmost honour to have you witness our grand union.
          </div>
          <div>Love,</div>
          <div>Abhilasha & Rohit</div>
        </div>
      </div>
      <div className="hashtags">
        <div>#ALROhitched</div>
        <div>#GaurgeousCouple</div>
        <div>#RohitKiAbhilasha</div>
      </div>
      <div className="countdown">
        <p id="demo"></p>
      </div>
    </>
  );
}

export default InviteSection;
