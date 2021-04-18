import { Switch, Route, useRouteMatch } from 'react-router-dom';

const ListRouter = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <div>List</div>
      </Route>
    </Switch>
  );
};

export default ListRouter;
