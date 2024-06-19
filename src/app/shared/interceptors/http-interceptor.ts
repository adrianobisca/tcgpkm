import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { setLoadingHide, setLoadingShow } from '@shared/actions/loading.actions';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private store: Store
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiKey = environment.apiKey;

    const authReq = req.clone({
      headers: req.headers.set('X-Api-Key', apiKey),
    });

    this.store.dispatch(new setLoadingShow());

    return next.handle(authReq).pipe(
      finalize(() => {
        this.store.dispatch(new setLoadingHide());
      })
    );
  }
}
