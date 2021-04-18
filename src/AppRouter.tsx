import GuardedRoute from './modules/shared/components/GuardedRoute/GuardedRoute';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  checkAuthenticated,
  checkAuthorized,
} from './modules/shared/utils/auth.guard';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <GuardedRoute
            canEnter={[checkAuthenticated, checkAuthorized(['ADMIN'])]}
            path="/lists"
            component={React.lazy(() => import('./modules/lists/Lists.router'))}
          />
          <Route
            path="/settings"
            component={React.lazy(
              () => import('./modules/settings/Settings.router'),
            )}
          />
          <Route
            path="/dashboard"
            component={React.lazy(
              () => import('./modules/dashboard/Dashboard.router'),
            )}
          />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="*" render={() => <div>Not found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
