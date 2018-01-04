import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">PSSocial</button>
      <button mat-button routerLink="/users">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
      <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private apiService: ApiService, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }
}
