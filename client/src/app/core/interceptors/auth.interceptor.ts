import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth-token');
  if (token && !req.url.startsWith('http')) {
    const authReq = req.clone({
      setHeaders: { Authorization: token },
    });
    return next(authReq);
  }
  return next(req);
};
