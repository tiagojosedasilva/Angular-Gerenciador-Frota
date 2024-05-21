import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = new Router()
  const token = window.localStorage.getItem('token');

  if (token) {
    return true;
  }
  else{
    router.navigate(['login'])
    return false;
  }

};
