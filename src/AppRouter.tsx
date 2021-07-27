import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { NotFoundView } from '@shared/views';
import { PrivateRoute } from '@shared/components';
import { UserRole } from '@shared/models';
import {
  DASHBOARD_PATH,
  LISTS_PATH,
  LOGIN_PATH,
  SETTINGS_PATH,
  SIGN_UP_PATH,
} from './paths';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute
            roles={[UserRole.ADMIN]}
            path={LISTS_PATH}
            component={React.lazy(() => import('@lists/ListsRouter'))}
          />

          <PrivateRoute
            path={SETTINGS_PATH}
            component={React.lazy(() => import('@settings/SettingsRouter'))}
          />

          <Route
            path={DASHBOARD_PATH}
            component={React.lazy(() => import('@dashboard/DashboardRouter'))}
          />

          <Route exact path="/">
            <Redirect to={DASHBOARD_PATH} />
          </Route>

          <Route
            exact
            path={[LOGIN_PATH, SIGN_UP_PATH]}
            component={React.lazy(() => import('@auth/AuthRouter'))}
          />

          <Route path="*" component={NotFoundView} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
