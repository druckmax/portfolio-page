'use client';

import React, { createContext, useRef, useState, ReactNode } from 'react';

interface MainContextType {
  heroRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  showHamburger: boolean;
  scrollHandler: (currentRef: React.RefObject<HTMLDivElement>) => void;
  hamburgerHandler: () => void;
  hamburgerToggle: React.RefObject<HTMLInputElement>;
  heroScrollHandler: (currentRef: React.RefObject<HTMLDivElement>) => void;
}

export const MainContext = createContext<MainContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [showHamburger, setShowHamburger] = useState(false);
  const hamburgerToggle = useRef<HTMLInputElement>(null);

  const hamburgerHandler = () => {
    if (showHamburger) {
      setShowHamburger(false);
      if (hamburgerToggle.current) {
        hamburgerToggle.current.checked = false;
      }
      document.body.style.overflowY = 'auto';
    } else {
      setShowHamburger(true);
      if (hamburgerToggle.current) {
        hamburgerToggle.current.checked = true;
      }
      document.body.style.overflowY = 'hidden';
    }
  };

  let options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

  const scrollHandler = (currentRef: React.RefObject<HTMLDivElement>) => {
    if (currentRef.current?.className === 'wrapper') {
      options = { ...options, block: 'start' };
    }

    if (window.innerWidth < 1200) {
      hamburgerHandler();
      options = { behavior: 'smooth', block: 'start' };
    }
    currentRef.current?.scrollIntoView(options);
  };

  const heroScrollHandler = (currentRef: React.RefObject<HTMLDivElement>) => {
    if (currentRef.current?.className === 'wrapper') {
      options = { ...options, block: 'start' };
    }

    currentRef.current?.scrollIntoView(options);
  };

  return (
    <MainContext.Provider
      value={{
        heroRef,
        workRef,
        aboutRef,
        contactRef,
        showHamburger,
        scrollHandler,
        hamburgerHandler,
        hamburgerToggle,
        heroScrollHandler,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
