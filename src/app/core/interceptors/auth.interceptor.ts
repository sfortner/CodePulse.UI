import { inject, Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/features/auth/services/auth.service';

// Angular 15 and later uses functional interceptor syntax instead of being DI-based
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const user = authService.getUser();
  let authReq = req;

    // define helper function
    const shouldInterceptRequest = (request: HttpRequest<any>): boolean => {
      return request.urlWithParams.indexOf('addAuth=true') > -1;
    };

  if (shouldInterceptRequest(req)) {
    authReq = req.clone({
      setHeaders: {
        'Authorization': cookieService.get('Authorization')
      }
    });
  }

  return next(authReq);
};
