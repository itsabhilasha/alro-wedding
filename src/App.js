import "./App.css";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import HaldiSection from "./Components/HaldiSection";
import InviteSection from "./Components/InviteSection";
import SangeetSection from "./Components/SangeetSection";
import WeddingSection from "./Components/WeddingSection";
import Rsvp from "./Components/Rsvp";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <InviteSection />
      <HaldiSection />
      <SangeetSection />
      <WeddingSection />
      <Rsvp />
      <FAQ />
    </div>
  );
}

export default App;
