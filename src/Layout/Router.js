import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Calendar =  React.lazy(() => import('../pages/Calendar'));
const Assignments = React.lazy(() => import('../pages/Assignments'));

const router = props => (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/assignments" component={Assignments} />
      </Switch>
    </Suspense>
);

export default router;
