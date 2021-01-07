import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoutesFlattenArray } from './routes';
import Navigation from './components/organisms/navigation';
import { GlobalStyle } from './theme/globalStyle';
import { PrimitivesContextProvider } from './contexts/primitivesContext';
import { LocationContextProvider } from './contexts/locationContext';

export default function App() {
  return (
    <Router>
      <PrimitivesContextProvider>
        <LocationContextProvider>
          <Navigation />
          <GlobalStyle />
          <Switch>
            { RoutesFlattenArray.map(route => <Route { ...route } />) }
          </Switch>
        </LocationContextProvider>
      </PrimitivesContextProvider>
    </Router>
  );
}
