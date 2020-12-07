import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import IPrimitivesContext from '../__types__/IPrimitivesContext';

export const defaultValue: IPrimitivesContext = {
  navigationLinksVisibility: false,
  setNavigationLinksVisibility: () => {  },
  windowScrollValue: window.scrollY,
  setWindowScrollValue: () => {  },
}

export const PrimitivesContext = createContext<IPrimitivesContext>(defaultValue);

export const PrimitivesContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [navigationVisibility, setNavigationVisibility] = useState<boolean>(false);
  const [windowScrollValue, setWindowScrollValue] = useState<number>(0);

  const providerValue: IPrimitivesContext = {
    navigationLinksVisibility: navigationVisibility,
    setNavigationLinksVisibility: setNavigationVisibility,
    windowScrollValue: windowScrollValue,
    setWindowScrollValue: setWindowScrollValue,
  }

  useEffect(() => { 
    window.addEventListener('scroll', () => setWindowScrollValue(() => window.scrollY)); 
  }, []);

  return (
    <PrimitivesContext.Provider value={ providerValue }>
      { children }
    </PrimitivesContext.Provider>
  )
}