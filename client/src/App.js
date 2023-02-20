import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Projects/Projects";
import TechStack from "./Components/TeckStack/TechStack";
import PrpjectsSlider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
      <Navbar />
      <NavbarMobileView />
      <About />
      <TechStack /> 
      <PrpjectsSlider/>
      <Project /> 
      <Testimonials />
      <Contact />
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
