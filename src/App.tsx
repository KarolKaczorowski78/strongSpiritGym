import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoutesFlattenArray } from './routes/routes';
import Navigation from './components/organisms/navigation';
import { GlobalStyle } from './theme/globalStyle';
import { PrimitivesContextProvider } from './contexts/primitivesContext';
import { LocationContextProvider } from './contexts/locationContext';
import { TimerProvider } from './contexts/timerContext';
import Timer from './components/organisms/Timer';
import Loading from './components/molecues/Loading';
import LoadingComponent from './components/molecues/Loading';

export default function App() {
  return (
    <Router>
      <PrimitivesContextProvider>
        <LocationContextProvider>
          <TimerProvider>
            <Navigation />
            <GlobalStyle />
            <Timer />
            <Suspense fallback={ <LoadingComponent /> }>
              <Switch>
                  { RoutesFlattenArray.map(route => <Route { ...route } />) }
              </Switch>
            </Suspense>
          </TimerProvider>
        </LocationContextProvider>
      </PrimitivesContextProvider>
    </Router>
  );
}
