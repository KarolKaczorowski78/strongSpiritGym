import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoutesFlattenArray } from './routes';
import Navigation from './components/organisms/navigation';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        { RoutesFlattenArray.map(route => <Route { ...route } />) }
      </Switch>
    </Router>
  );
}
