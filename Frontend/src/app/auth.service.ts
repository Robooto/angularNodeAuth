import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  sendUserRegistration(registerData) {
    return this.http.post('http://localhost:3000/register', registerData, { observe: 'response', responseType: 'text'})
    .pipe(map((res: HttpResponse<any>) => res.status === 200))
  }

  loginUser(loginData) {
    this.http.post('http://localhost:3000/register/login', loginData).subscribe(
        (data: any) => localStorage.setItem('token', data.token),
        err => console.log(err)
    );
  }

}
