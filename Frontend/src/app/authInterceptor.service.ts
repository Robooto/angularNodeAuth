import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    TOKEN_KEY = 'token';
    constructor() {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authRequest = req.clone({
            headers: req.headers.set('Authorization', `token ${this.token}`)
        });
        return next.handle(authRequest);
    }

}