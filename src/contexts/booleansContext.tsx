import React, { createContext, FC, ReactNode, useState } from 'react';
import IBooleansContext from '../__types__/IBooleansContext';

export const defaultValue: IBooleansContext = {
  navigationLinksVisibility: false,
  setNavigationLinksVisibility: () => {  },
}

export const BooleansContext = createContext<IBooleansContext>(defaultValue);

export const BooleansContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [navigationVisibility, setNavigationVisibility] = useState<boolean>(false)

  const providerValue: IBooleansContext = {
    navigationLinksVisibility: navigationVisibility,
    setNavigationLinksVisibility: setNavigationVisibility,
  }

  return (
    <BooleansContext.Provider value={ providerValue }>
      { children }
    </BooleansContext.Provider>
  )
}