import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => (
  <div>
    Login <Link to="/signup">Signup</Link>
  </div>
);

export default Login;
