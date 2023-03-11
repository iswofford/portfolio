import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Requirments from "./Components/TeckStack/TechStack";
import ConferenceDemo from "./Components/ConferenceDemo/ConferenceDemo";
import Footer from "./Components/Footer/Footer";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
      <Navbar />
      <NavbarMobileView />
      <About />
      <Requirments /> 
      <ConferenceDemo />
      <Footer />
      <ScrollToTop
        smooth
        height="20"
        width="20"
        color="white"
        className="scroll"
        style={{
          borderRadius: "90px",
          backgroundColor: "#727171"
        }} />
    </>
  );
}

export default App;
