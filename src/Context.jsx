import React from "react";
import { createContext, useRef } from "react";

export const MainContext = createContext();

export function ContextProvider({ children }) {
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <MainContext.Provider value={{ heroRef, workRef, aboutRef, contactRef }}>
      {children}
    </MainContext.Provider>
  );
}
