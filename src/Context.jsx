import React from "react";
import { createContext, useRef, useState } from "react";

export const MainContext = createContext();

export function ContextProvider({ children }) {
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [showHamburger, setShowHamburger] = useState(false);
  const hamburgerToggle = useRef(null);

  const hamburgerHandler = () => {
    if (showHamburger) {
      setShowHamburger(false);
      hamburgerToggle.current.checked = false;
      document.body.style.overflowY = "auto";
    } else {
      setShowHamburger(true);
      hamburgerToggle.current.checked = true;
      document.body.style.overflowY = "hidden";
    }
  };

  let options = { behavior: "smooth", block: "center" };

  const scrollHandler = (currentRef) => {
    if (currentRef.current.className === "wrapper")
      options = { ...options, block: "start" };

    if (window.innerWidth < 1200) {
      hamburgerHandler();
      options = { behavior: "smooth", block: "start" };
    }
    currentRef.current.scrollIntoView(options);
  };

  const heroScrollHandler = (currentRef) => {
    if (currentRef.current.className === "wrapper")
      options = { ...options, block: "start" };

    currentRef.current.scrollIntoView(options);
  };

  return (
    <MainContext.Provider
      value={{
        heroRef,
        workRef,
        aboutRef,
        contactRef,
        showHamburger,
        hamburgerToggle,
        hamburgerHandler,
        scrollHandler,
        heroScrollHandler,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
