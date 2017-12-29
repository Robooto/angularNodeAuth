import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get('http://localhost:3000/posts');
  }

  getUsers() {
    return this.http.get('http://localhost:3000/posts/users');
  }

  getUser(id) {
    return this.http.get(`http://localhost:3000/posts/users/${id}`);
  }

}
