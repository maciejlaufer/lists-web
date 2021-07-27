import { Switch, Route } from 'react-router-dom';
import { LOGIN_PATH, SIGN_UP_PATH } from 'src/paths';
import { Login, SignUp } from './components';
import { AuthView } from './views';

const AuthRouter: React.FC<{ match: any }> = (props) => {
  console.log('match', props);
  return (
    <AuthView>
      <Switch>
        <Route exact path={LOGIN_PATH}>
          <Login />
        </Route>
        <Route exact path={SIGN_UP_PATH}>
          <SignUp />
        </Route>
      </Switch>
    </AuthView>
  );
};

export default AuthRouter;
