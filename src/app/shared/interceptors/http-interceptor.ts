import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiKey = environment.apiKey;

    const authReq = req.clone({
      headers: req.headers.set('X-Api-Key', apiKey),
    });

    this.loader.show();
    return next.handle(authReq).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
