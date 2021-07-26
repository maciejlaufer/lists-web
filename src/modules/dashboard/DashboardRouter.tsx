import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RouteConfig from '@shared/models/route-config';

const DashboardRouter = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <div>Dashboard</div>
      </Route>
      <Route exact path={`${match.url}/test`}>
        <div>Test</div>
      </Route>
      <Route exact path="*">
        <div>Not found dashboard</div>
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
