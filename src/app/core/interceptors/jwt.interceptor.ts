import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.headers.get("skip")){
      return next.handle(request);
    }
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.localStorageService.getProperty('token');
    const isApiUrl = request.url.startsWith(environment.apiURL);
    if (token !== null && isApiUrl) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
    }

    return next.handle(request);
}
}
