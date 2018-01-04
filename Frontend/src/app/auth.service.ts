import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  basePath: string = 'http://localhost:3000';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  sendUserRegistration(registerData) {
    return this.http.post<any>(`${this.basePath}/register`, registerData).subscribe(
      data => this.saveToken(data.token),
      err => console.log(err)
    );
  }

  loginUser(loginData) {
    this.http.post<any>(`${this.basePath}/register/login`, loginData).subscribe(
        data => this.saveToken(data.token),
        err => console.log(err)
    );
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }

}
