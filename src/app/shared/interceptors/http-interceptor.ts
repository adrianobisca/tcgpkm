import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiKey = environment.apiKey;

    const authReq = req.clone({
      headers: req.headers.set('X-Api-Key', apiKey),
    });

    return next.handle(authReq);
  }
}
