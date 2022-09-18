import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { useRef } from "react";

function App() {
const scrollRef = useRef(null)

console.log(scrollRef)

  const scrollHandler = (currentRef) => {
    currentRef.current.scrollIntoView();
  };

  return (
    <div className="wrapper">
      <Navbar scrollHandler={scrollHandler} />
      <Hero />
      <Work /* refObj={workRef} */ />
      <About /* refObj={aboutRef} */ />
      <Contact /* refObj={contactRef} */ />
      <Footer />
      <div ref={scrollRef}></div>
    </div>
  );
}

export default App;
