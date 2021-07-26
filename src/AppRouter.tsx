import PrivateRoute from './modules/shared/components/PrivateRoute/PrivateRoute';
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
import { NotFoundView } from '@shared/views';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute
            canEnter={[checkAuthenticated, checkAuthorized(['ADMIN'])]}
            path="/lists"
            component={React.lazy(() => import('./modules/lists/ListsRouter'))}
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
              () => import('./modules/dashboard/DashboardRouter'),
            )}
          />

          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>

          <Route
            exact
            path={['/login', '/signup']}
            component={React.lazy(() => import('./modules/auth/AuthRouter'))}
          />

          <Route path="*" component={NotFoundView} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
