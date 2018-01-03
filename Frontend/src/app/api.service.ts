import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  basePath: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(`${this.basePath}/posts`);
  }

  saveMessage(message) {
    return this.http.post(`${this.basePath}/posts`, message);
  }

  getUsers() {
    return this.http.get(`${this.basePath}/posts/users`);
  }

  getUser(id) {
    return this.http.get(`${this.basePath}/posts/users/${id}`);
  }

}
