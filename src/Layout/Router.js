import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Calendar = React.lazy(() => import('../pages/Calendar'));
const Assignments = React.lazy(() => import('../pages/Assignments'));
const School = React.lazy(() => import('../pages/School'));

const router = (props) => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/assignments" component={Assignments} />
            <Route path="/school" component={School} />
        </Switch>
    </Suspense>
);

export default router;
