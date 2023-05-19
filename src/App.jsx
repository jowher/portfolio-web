import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from "react-icons/bs";
import { Navigation, Banner, About, Experience, Contact } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Banner />

        {/* BG ELM */}
        <div className="bg_elm_1"></div>
        <div className="bg_elm_2"></div>
      </header>

      <About />
      <Experience />
      <Contact />

      <ScrollToTop
        smooth
        className="scroll_top"
        component={<BsArrowUp className="icon" />}
      />
    </>
  );
}

export default App;
