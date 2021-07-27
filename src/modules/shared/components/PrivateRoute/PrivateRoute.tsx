import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import UserRole from '@shared/models/user-role';
import { AuthUtils } from '@shared/utils';

const PrivateRoute: React.FC<{ roles?: UserRole[] } & RouteProps> = ({
  roles,
  ...restProps
}) => {
  if (!AuthUtils.checkAuthenticated()) {
    return <Redirect to="/login" />;
  }

  if (roles && roles.length > 0 && !AuthUtils.checkAuthorized(roles)) {
    return <Redirect to="/" />;
  }

  return <Route {...restProps} />;
};

export default PrivateRoute;
