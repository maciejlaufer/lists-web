import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  checkAuthenticated,
  checkAuthorized,
} from './modules/shared/utils/auth.guard';
import RouteConfig from '@shared/models/route-config';

const routes: RouteConfig[] = [
  {
    path: '/lists',
    lazy: React.lazy(() => import('./modules/lists/Lists.router')),
    canEnter: [checkAuthenticated],
  },
  {
    path: '/settings',
    lazy: React.lazy(() => import('./modules/settings/Settings.router')),
    canEnter: [checkAuthenticated, checkAuthorized(['ADMIN'])],
  },
  {
    path: '/dashboard',
    lazy: React.lazy(() => import('./modules/dashboard/Dashboard.router')),
    canEnter: [checkAuthenticated],
  },
  {
    path: '/',
    to: '/dashboard',
    exact: true,
  },
  {
    path: '*',
    component: () => <div>Not found</div>,
    exact: true,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map(
          ({ path, component: Component, lazy: Lazy, to, exact, canEnter }) => {
            return (
              <Route
                path={path}
                exact={exact}
                render={() => {
                  if (canEnter && canEnter.length > 0) {
                    for (const f of canEnter) {
                      if (!f()) {
                        return <Redirect to="/login" />;
                      }
                    }
                  }

                  return to ? (
                    <Redirect to={to} />
                  ) : (
                    <>
                      {Lazy ? (
                        <Suspense fallback={<div>Loading...</div>}>
                          <Lazy />
                        </Suspense>
                      ) : (
                        <>{Component ? <Component /> : <React.Fragment />}</>
                      )}
                    </>
                  );
                }}
              />
            );
          },
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
