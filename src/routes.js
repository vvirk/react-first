import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FilmsContainer } from './containers/FilmsContainer';
import { DetailsContainer } from './containers/DetailsContainer';

export const MainRouter = () => (
  <Router>
    <Route path="/react-first/" exact component={FilmsContainer} />
    <Route path="/react-first/details/:id" exact component={DetailsContainer} />
  </Router>
);

export default MainRouter;
