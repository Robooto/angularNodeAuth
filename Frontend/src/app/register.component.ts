import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Component({
  selector: 'register',
  template: `
	<mat-card>
		<mat-card-header>
			<mat-card-title>
				<h4>Register New User</h4>
			</mat-card-title>
		</mat-card-header>
		<form>
				<mat-form-field>
						<input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email" />
				</mat-form-field>
				<mat-form-field>
						<input [(ngModel)]="registerData.pwd" name="pwd" matInput placeholder="password" type="password" />
				</mat-form-field>
				<br>
				<mat-form-field>
						<input [(ngModel)]="registerData.name" name="name" matInput placeholder="name" />
				</mat-form-field>
				<br>
				<mat-form-field style="width:100%;">
						<textarea [(ngModel)]="registerData.description" name="description" matInput placeholder="description"></textarea>
				</mat-form-field>
				<br>
				<button mat-raised-button color="primary" (click)="post()">Register</button>
		</form>
	</mat-card>
  `,
})
export class RegisterComponent implements OnInit {
	registerData = {};
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
	}
	
	post() {
		this.authService
		.sendUserRegistration(this.registerData);
	}
}
