import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

const SettingsRouter = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/profile`}>
        <div>Profile</div>
        <Link to="/">Base</Link>
      </Route>
    </Switch>
  );
};

export default SettingsRouter;
