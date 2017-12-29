import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      PSSocial
      <button mat-button routerLink="/users">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    <app-users [users]="users$ | async"></app-users>
    <app-messages [messages]="messages$ | async"></app-messages>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  users$: Observable<any>;
  messages$: Observable<any>;
  title = 'app';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.users$ = this.apiService.getUsers();
    this.messages$ = this.apiService.getMessages()
      .pipe(tap((data) => console.log(data)));
  }
}
