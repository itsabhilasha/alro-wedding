import "./App.css";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import HaldiSection from "./Components/HaldiSection";
import InviteSection from "./Components/InviteSection";
import SangeetSection from "./Components/SangeetSection";
import WeddingSection from "./Components/WeddingSection";
import Rsvp from "./Components/Rsvp";
import Contactus from "./Components/contactus";
import RsvpForm from "./Components/RsvpForm";
import { useState } from "react";

function App() {
  const [rsvpVisible, setRsvpVisible] = useState(false);

  const toggleRsvp = () => {
    setRsvpVisible(!rsvpVisible);
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      <InviteSection />
      <HaldiSection />
      <SangeetSection />
      <WeddingSection />
      <Rsvp toggleRsvp={() => toggleRsvp()} />
      <RsvpForm visible={rsvpVisible} toggleRsvp={() => toggleRsvp()} />
      <Contactus />
    </div>
  );
}

export default App;
