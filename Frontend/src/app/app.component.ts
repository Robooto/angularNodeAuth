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
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    <app-messages [messages]="messages$ | async"></app-messages>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages$: Observable<any>;
  title = 'app';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.messages$ = this.apiService.getMessages()
      .pipe(tap((data) => console.log(data)));
  }
}
