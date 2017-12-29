import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  template: `
	<mat-card>
		<mat-card-header>
			<mat-card-title>
				<h4>Profile</h4>
			</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <profile-list [profile]="profile$ | async"></profile-list>
        </mat-card-content>		
	</mat-card>
  `,
})
export class ProfileComponent implements OnInit {
    profile$: Observable<any>;
  constructor(
      private apiService: ApiService,
      private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
        let id = params.get('id');
        this.profile$ = this.apiService.getUser(id);
    });
    
  }
	

}