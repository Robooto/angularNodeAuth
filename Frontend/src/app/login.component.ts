import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
	<mat-card>
		<mat-card-header>
			<mat-card-title>
				<h4>Login</h4>
			</mat-card-title>
		</mat-card-header>
		<form>
				<mat-form-field>
						<input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type="email" />
				</mat-form-field>
				<mat-form-field>
						<input [(ngModel)]="loginData.pwd" name="pwd" matInput placeholder="password" type="password" />
				</mat-form-field>
				<button mat-raised-button color="primary" (click)="login()">Login</button>
		</form>
	</mat-card>
  `,
})
export class LoginComponent implements OnInit {
	loginData = {};
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
	}
	
	login() {
		this.authService
			.loginUser(this.loginData);
	}
}
