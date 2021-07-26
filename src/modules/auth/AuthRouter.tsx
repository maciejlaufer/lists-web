import { Switch, Route } from 'react-router-dom';
import { Login, SignUp } from './components';
import { AuthLayout } from './layouts';

const AuthRouter: React.FC<{ match: any }> = (props) => {
  console.log('match', props);
  return (
    <AuthLayout>
      <Switch>
        <Route exact path={`/login`}>
          <Login />
        </Route>
        <Route exact path={`/signup`}>
          <SignUp />
        </Route>
      </Switch>
    </AuthLayout>
  );
};

export default AuthRouter;
