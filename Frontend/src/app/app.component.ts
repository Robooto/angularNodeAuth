import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">PSSocial</button>
      <button mat-button routerLink="/users">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }
}
