import { Switch, Route } from 'react-router-dom';
import ListView from './views/ListView/ListView';

const ListRouter: React.FC<{ match: any }> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <ListView />
      </Route>
    </Switch>
  );
};

export default ListRouter;
