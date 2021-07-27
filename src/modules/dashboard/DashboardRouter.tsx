import { NotFoundView } from '@shared/views';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

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
        <NotFoundView />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
