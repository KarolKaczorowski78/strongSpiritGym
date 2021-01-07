import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { ECountries } from '../__types__/ECountries';
import ILocationContext from '../__types__/ILocationContext';
import IGym from '../__types__/IGym';
import { Locations } from '../axios/endpoints/locations';

export const defaultValue: ILocationContext = {
  country: ECountries.POLAND,
  gymId: 1,
  gyms: [],
  setCountry: () => {  },
  setGymId: () => {  },
  setGyms: () => {  },
}

export const LocationContext = createContext<ILocationContext>(defaultValue);

export const LocationContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [country, setCountry] = useState<ECountries>(defaultValue.country);
  const [gymId, setGymId] = useState<number>(defaultValue.gymId);
  const [gyms, setGyms] = useState<IGym[]>([]);

  const providerValue: ILocationContext = {
    country: country,
    gymId: gymId,
    gyms: gyms,
    setCountry: setCountry,
    setGymId: setGymId,
    setGyms: setGyms,
  }

  useEffect(() => {
    (async () => {
      const newGyms = (await Locations.getByCountry(country)).data;

      setGyms(() => newGyms);
      setGymId(() => newGyms[0].id);
    })()
  }, [country]);

  return (
    <LocationContext.Provider value={ providerValue }>
      { children }
    </LocationContext.Provider>
  )
}