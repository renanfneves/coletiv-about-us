import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AboutUs } from '../pages';

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={AboutUs} />
    <Route component={AboutUs} />
  </Switch>
);

export default Routes;
