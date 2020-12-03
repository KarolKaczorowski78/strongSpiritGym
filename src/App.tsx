import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoutesFlattenArray } from './routes';

export default function App() {
  return (
    <Router>
      <Switch>
        { RoutesFlattenArray.map(route => <Route { ...route } />) }
      </Switch>
    </Router>
  );
}
