import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Calendar =  React.lazy(() => import('../pages/Calendar'));
const Planner = React.lazy(() => import('../pages/Planner'));

const router = props => (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/planner">
          <Planner />
        </Route>
      </Switch>
    </Suspense>
);

export default router;
