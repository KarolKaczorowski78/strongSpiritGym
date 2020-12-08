import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { ELanguages } from '../__types__/ELanguages';
import IPrimitivesContext from '../__types__/IPrimitivesContext';

export const defaultValue: IPrimitivesContext = {
  navigationLinksVisibility: false,
  setNavigationLinksVisibility: () => {  },
  windowWidth: window.innerWidth,
  setWindowWidth: () => {  },
  currentLanguage: ELanguages.ENGLISH,
  setCurrentLanguage: () => {  },
}

export const PrimitivesContext = createContext<IPrimitivesContext>(defaultValue);

export const PrimitivesContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [navigationVisibility, setNavigationVisibility] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(defaultValue.windowWidth);
  const [currentLanguage, setCurrentLanguage] = useState<ELanguages>(defaultValue.currentLanguage)

  const providerValue: IPrimitivesContext = {
    navigationLinksVisibility: navigationVisibility,
    setNavigationLinksVisibility: setNavigationVisibility,
    windowWidth: windowWidth,
    setWindowWidth: setWindowWidth,
    currentLanguage: currentLanguage,
    setCurrentLanguage: setCurrentLanguage,
  }

  useEffect(() => { 
    window.addEventListener('resize', () => setWindowWidth(() => window.innerWidth)); 
  }, []);

  return (
    <PrimitivesContext.Provider value={ providerValue }>
      { children }
    </PrimitivesContext.Provider>
  )
}