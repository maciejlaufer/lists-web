export function checkAuthenticated() {
  return true;
}

export function checkAuthorized(roles: any) {
  return function checkRoles() {
    return true;
  };
}
