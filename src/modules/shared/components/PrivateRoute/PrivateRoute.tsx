import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const GuardedRoute: React.FC<{ canEnter: (() => boolean)[] } & RouteProps> = ({
  canEnter,
  ...restProps
}) => {
  for (const f of canEnter) {
    if (!f()) {
      return <Redirect to="/login" />;
    }
  }

  return <Route {...restProps} />;
};

export default GuardedRoute;
