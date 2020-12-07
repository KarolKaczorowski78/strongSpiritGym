import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoutesFlattenArray } from './routes';
import Navigation from './components/organisms/navigation';
import { GlobalStyle } from './theme/globalStyle';
import { PrimitivesContextProvider } from './contexts/primitivesContext';

export default function App() {
  return (
    <Router>
      <PrimitivesContextProvider>
        <Navigation />
        <GlobalStyle />
        <Switch>
          { RoutesFlattenArray.map(route => <Route { ...route } />) }
        </Switch>
      </PrimitivesContextProvider>
    </Router>
  );
}
