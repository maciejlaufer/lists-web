import UserRole from '@shared/models/user-role';
import { LocalStorageUtils } from '@shared/utils';

export function checkAuthenticated() {
  // TODO: check if has token and if it isn't expired
  const authToken = LocalStorageUtils.getItem('auth-token');
  return true;
}

export function checkAuthorized(roles: UserRole[]) {
  // TODO: check if token has required roles
  return true;
}

const AuthUtils = {
  checkAuthenticated,
  checkAuthorized,
};

export default AuthUtils;
