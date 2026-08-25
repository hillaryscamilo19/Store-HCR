import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../services/auth/authServices/auth-services';

export const authGuard: CanActivateFn = () => {
  const authServices = inject(AuthServices);

  const router = inject(Router);

  if(authServices.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(["/login"]);
};
